import React from 'react';
import './IssueCardSkeleton.css';

const IssueCardSkeleton = ({ repoImage, repoName, repoDesc, issueTitle, issueDesc, languageTag }) => {
  return (
    <div className="issue-card-skeleton">
      <div className="repo-section">
        <img src={repoImage} alt="Repo" className="repo-image" />
        <div className="repo-info">
          <h3 className="repo-name">{repoName}</h3>
          <p className="repo-desc">{repoDesc}</p>
        </div>
      </div>
      <div className="issue-section">
        <h4 className="issue-title">{issueTitle}</h4>
        <p className="issue-desc">{issueDesc}</p>
        <span className="language-tag" style={{ backgroundColor: '#e0f7fa' }}>{languageTag}</span>
      </div>
    </div>
  );
};

export default IssueCardSkeleton;
