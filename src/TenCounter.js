import useCount from './useCount';

function TenCounter() {
    const { count, add } = useCount();

    function addTen() {
        add(10);
    }

    return (
        <>
            <h1>{count}</h1>
            <button
                type="button"
                onClick={addTen}
            >
                點我加十
            </button>
        </>
    );
}

export default TenCounter;