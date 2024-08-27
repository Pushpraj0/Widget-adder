import React, { useState } from 'react';
import './addWidgetPopUp.css';

const AddWidgetPopUp = ({ closePopup, addWidget }) => {
  const [selectedCategory, setSelectedCategory] = useState('CSPM');
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleWidgetSelection = (widget) => {
    setSelectedWidgets((prev) =>
      prev.includes(widget)
        ? prev.filter((w) => w !== widget)
        : [...prev, widget]
    );
  };

  const handleConfirm = () => {
    addWidget(selectedWidgets);
    closePopup();
  };

  return (
    <div className="add-widget-popup">
      <div className="popup-header">
        <h4>Add Widget</h4>
        <button className="close-btn" onClick={closePopup}>X</button>
      </div>
      <p className="personalize-text">Personalize your dashboard by adding the following widget</p>
      <div className="popup-categories">
        <button
          className={selectedCategory === 'CSPM' ? 'selected' : ''}
          onClick={() => handleCategoryChange('CSPM')}
        >
          CSPM
        </button>
        <button
          className={selectedCategory === 'CWPP' ? 'selected' : ''}
          onClick={() => handleCategoryChange('CWPP')}
        >
          CWPP
        </button>
        <button
          className={selectedCategory === 'Image' ? 'selected' : ''}
          onClick={() => handleCategoryChange('Image')}
        >
          Image
        </button>
        <button
          className={selectedCategory === 'Ticket' ? 'selected' : ''}
          onClick={() => handleCategoryChange('Ticket')}
        >
          Ticket
        </button>
      </div>
      <div className="popup-content">
        <div className="checkbox-container">
          {selectedCategory === 'CSPM' && (
            <>
              <label className='input'>
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes('cloud account')}
                  onChange={() => handleWidgetSelection('cloud account')}
                />
                Cloud Account
              </label>
              <label className='input'>
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes('cloud account risk assessment')}
                  onChange={() => handleWidgetSelection('cloud account risk assessment')}
                />
                Cloud Account Risk Assessment
              </label>
            </>
          )}
        </div>
      </div>
      <div className="popup-actions">
        <button className="cancel-btn" onClick={closePopup}>Cancel</button>
        <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default AddWidgetPopUp;
