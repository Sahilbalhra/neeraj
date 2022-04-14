import React, { useState } from "react";
import Add from "./Addons/Add";
import Main from "./Addons/Main";
import Edit from "./Addons/Edit";
import Header from "./Header";
import Delete from "./Addons/Delete";
import AdvanceSearch from "./Addons/AdvanceSearch";
import AnalyticsView from "./Addons/AnalyticsView";

const MainHome = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [analyticsView, setAnalyticsView] = useState(false);
  const addClicks = (childdata) => {
    setAdd(!childdata);
  };
  const editClicks = (childdata) => {
    setEdit(!childdata);
  };
  const delClicks = (childdata) => {
    setDel(!childdata);
  };
  const adClicks = (childdata) => {
    setAdvanceSearch(!childdata);
  };
  const avClicks = (childdata) => {
    setAnalyticsView(!childdata);
  };

  return (
    <>
      <Header addClick={addClicks} editClick={editClicks} delClick={delClicks} adClick={adClicks} avClick={avClicks}/>
      {add ? (
        <Add addClick={addClicks} />
      ) : (
        <>
          {edit ? (
            <Edit editClick={editClicks} />
          ) : (
            <>
              {del ? (
                <Delete delClick={delClicks} />
              ) : (
                <>
                  {advanceSearch ? (
                    <AdvanceSearch adClick={adClicks}/>
                  ) : (
                    <>{analyticsView ? <AnalyticsView avClick={avClicks} /> : <Main />}</>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default MainHome;
