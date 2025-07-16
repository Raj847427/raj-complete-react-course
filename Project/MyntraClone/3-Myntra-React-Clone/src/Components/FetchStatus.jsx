import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../Store/ItemsSlice";
import { fetchStatusAction } from "../Store/FetchStatusSlice";

const FetchStatus = () => {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect started", fetchStatus);

    if (fetchStatus.fetchDone) {
      console.log("Fetch already done, skipping.");
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());
    console.log("Fetching started...");

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("Fetched items:", items);

        if (items && items.length > 0) {
          dispatch(itemsAction.adinitialState(items[0]));
        }

        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingEnded());
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
        }
      });

    return () => {
      console.log("Cleanup - abort fetch");
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div></div>
    </>
  );
};
export default FetchStatus;
