import useCount from './useCount';

function OneCounter() {
    const { count, add } = useCount();

    function addOne() {
        add(1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button
                type="button"
                onClick={addOne}
            >
                點我加一
            </button>
        </>
    );
}

export default OneCounter;