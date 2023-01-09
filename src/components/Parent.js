import { useCallback, useState } from "react";
import Child from './Child';

const Parent = () => {
    const [data, setData] = useState(0);  
    const callback = useCallback((data) => {
        setData(data);
    });

    return (
        <div className="Parent">
          <Child parentCallback={callback} />
          <h2>DAta {data}</h2>
        </div>
      );
};

export default Parent;