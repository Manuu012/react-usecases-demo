import React, { useCallback, useState } from 'react';

function Parent() {
    const [count, setCount] = useState<number>(0);
    const [click, setClicks] = useState<number>(0);

    const handleClicks = useCallback(() => {
        setClicks((previous) => previous + 1);
    }, []);

    return (
        <div>
            <button onClick={() => setCount((previous) => previous + 1)}>
                Clicks on Parent {count}
            </button>
            <p>Clicks on Child {click}</p>
            <Child OnChildClick={handleClicks} />
        </div>
    );
}

type ChildProps = {
    OnChildClick: () => void;
};

const Child: React.FC<ChildProps> = React.memo(({ OnChildClick }) => {
    return <button onClick={OnChildClick}>Click on Child</button>;
});

export default Parent;
