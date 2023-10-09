import PropTypes from "prop-types";


const BlockDetails = ({ block, addNewFloor, removeFloor }) => {
    return (
      <div className="floor-plan-card">
        <div className="floor-plan-section">
          <p>Block Name: {block.name}</p>
          <p>Number of floors: {block.numberOfFloors}</p>
          <p>Total Units: {block.numberOfFloors * block.floors.length}</p>
          <button className="fa fa-plus add-floor-button" onClick={addNewFloor}>
            Add Floor
          </button>
        </div>
        <div className="floors">
          {block.floors.map((floor, index) => (
            <div key={index} className="floor">
              <p>Floor {index + 1}</p>
              <button className="fa fa-trash remove-floor-button" onClick={() => removeFloor(index)}>
                Remove Floor
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  BlockDetails.propTypes = {
    block: PropTypes.object.isRequired,
    addNewFloor: PropTypes.func.isRequired,
    removeFloor: PropTypes.func.isRequired,
  };

  export default BlockDetails;