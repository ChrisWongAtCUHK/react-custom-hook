import { useEffect, useState } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);

    const add = (addend) => {
        setCount(count + addend);
    };

    useEffect(() => {
        console.log(`count: ${count}`);
    }, [count]);

    return { count, add };
};

export default useCount;