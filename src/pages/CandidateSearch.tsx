import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    loadCandidate();
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSavedCandidates(JSON.parse(savedData));
    }
  }, []);

  const loadCandidate = async () => {
    const users = await searchGithub();
    if (users.length === 0) {
      setCandidate(null);
      return;
    }

    const userData = await searchGithubUser(users[0].login);
    setCandidate(userData);
  };

  const handleAccept = () => {
    if (candidate) {
      const updatedList = [...savedCandidates, candidate];
      setSavedCandidates(updatedList);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
    }
    loadCandidate();
  };

  const handleReject = () => {
    loadCandidate();
  };

  return (
    <div>
      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name} ({candidate.login})</h2>
          <p>Location: {candidate.location || 'N/A'}</p>
          <p>Email: {candidate.email || 'N/A'}</p>
          <p>Company: {candidate.company || 'N/A'}</p>
          <p>Bio: {candidate.bio || 'N/A'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div className="button-container">
          <button className="reject" onClick={handleReject}>-</button>
           <button className="accept" onClick={handleAccept}>+</button>
        </div>
        </div>
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;