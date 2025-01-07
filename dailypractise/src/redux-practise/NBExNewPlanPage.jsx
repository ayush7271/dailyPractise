import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchDataRequest } from './action'; // Assuming you have this action

// Your component
const NBExNewPlanPage = ({ data, name, fetchData }) => {

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>{name}</h1>
      <p>Data: {data}</p>
      {/* You can add more UI elements here */}
    </div>
  );
};

// Map Redux state and dispatch to props
const mapStateToProps = (state) => ({
  data: state.data, // Assuming you want to get data from Redux store
  name: state.name, // Assuming you want to get name from Redux store
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataRequest()), // Correct action dispatch
});

// Connect the component to Redux
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(NBExNewPlanPage);
