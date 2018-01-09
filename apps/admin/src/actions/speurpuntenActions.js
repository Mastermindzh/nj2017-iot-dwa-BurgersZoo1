import axios from "axios";

import * as ENDPOINTS from "./../constants/endpoint-constants";
import { SPEURPUNT_ACTION_TYPES } from "./../constants/actionTypes";

export function fetchSpeurpunten() {
  return dispatch => {
    axios
      .get(ENDPOINTS.SPEURPUNT.GET)
      .then(result => {
        dispatch({
          type: SPEURPUNT_ACTION_TYPES.FETCH_SPEURPUNTEN,
          payload: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addSpeurpunt(speurpunt) {
  return dispatch => {
    axios
      .post(ENDPOINTS.SPEURPUNT.POST, speurpunt)
      .then(result => {
        speurpunt.id = result.data.id;

        if (speurpunt.weetjes.length > 0) {
          updateWeetjes(speurpunt).then(() => {
            getSingleSpeurpunt(speurpunt).then(result => {
              dispatch({
                type: SPEURPUNT_ACTION_TYPES.ADD_SPEURPUNT,
                payload: result.data
              });
            });
          });
        } else {
          getSingleSpeurpunt(speurpunt).then(result => {
            dispatch({
              type: SPEURPUNT_ACTION_TYPES.ADD_SPEURPUNT,
              payload: result.data
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function updateSpeurpunt(speurpunt) {
  return dispatch => {
    axios
      .patch(ENDPOINTS.SPEURPUNT.PATCH, speurpunt.getPatchObject())
      .then(result => {
        speurpunt.id = result.data.id;


          updateWeetjes(speurpunt).then(() => {
            getSingleSpeurpunt(speurpunt).then(result => {
              dispatch({
                type: SPEURPUNT_ACTION_TYPES.UPDATE_SPEURPUNT,
                payload: result.data
              });
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function updateWeetjes(speurpunt) {
  return new Promise((resolve, reject) => {
    // delete connected but not source thingy.

    deleteWeetjes(speurpunt.id).then(() => {
      let weetjesRequests = [];
      // add the weetjes
      speurpunt.weetjes.forEach(weetje => {
        let requestObject = { speurpuntId: speurpunt.id, id: weetje };
        weetjesRequests.push(
          axios.patch(`${ENDPOINTS.WEETJES.PATCH}`, requestObject)
        );
      });

      Promise.all(weetjesRequests)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
}

function deleteWeetjes(speurpuntId) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          ENDPOINTS.WEETJES.GET
        }/?filter=%7B%22where%22%3A%20%7B%22speurpuntId%22%3A%20%22${speurpuntId}%22%7D%7D`
      )
      .then(result => {
        let weetjesRequests = [];

        result.data.forEach(weetje => {
          let requestObject = { speurpuntId: "", id: weetje.id };

          weetjesRequests.push(
            axios.patch(`${ENDPOINTS.WEETJES.PATCH}`, requestObject)
          );
        });

        if (weetjesRequests.length > 0) {
          Promise.all(weetjesRequests)
            .then(() => {
              resolve(true);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          resolve(true);
        }
      });
  });
}

export function getSingleSpeurpunt(speurpunt) {
  return axios.get(
    ENDPOINTS.SPEURPUNT.GETONE + `/${speurpunt.id}${ENDPOINTS.FILTER.ALL}`
  );
}
