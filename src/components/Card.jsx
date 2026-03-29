import React from 'react';

const Card = ({ image, title, subtitle, description, tag, price, duration, children }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
          {tag && <span className="card-tag">{tag}</span>}
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {description && <p className="card-description">{description}</p>}
        {(price || duration) && (
          <div className="card-meta">
            {price && <span className="card-price">{price}</span>}
            {duration && <span className="card-duration">{duration}</span>}
          </div>
        )}
        {children && <div className="card-actions">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
