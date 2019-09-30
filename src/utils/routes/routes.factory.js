import React from 'react';
import { Route } from "react-router-dom";

export const routeFactory = (routeObj) => {
  return routeObj.map((value, index) => {
    return (
      <Route
        key={index}
        exact
        params={value.params}
        path={value.path}
        render={(props) => {
          return <value.component {...props} routes={value.childrens }/>
        }}
      />
    );
  });
};