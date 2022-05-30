import React, {useState} from 'react'

const TikTak = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    console.log(winner)

    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    // do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    };
    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('already clicked');
            return;
        }
        let squares = [...cells];

        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        checkForWinner(squares);
        setCells(squares);
    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    };

    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}
                   className={`border text-center truncate border-slate-400 w-28 h-28 text-lg`}>{cells[num]}</td>;
    };

    return (
        <div className='bg-slate-900 w-full h-screen text-white'>
            <div className={'mx-auto flex justify-center pt-20 md:w-2/4'}>
                <table className={'mx-auto text-white md:w-2/4 '}>
                    <thead>
                    <tr>
                        <th>{''}</th>
                        <th className={'text-2xl'}> Turn: <span
                            className={'text-3xl text-green-500 text-center'}>{turn}</span></th>
                        <th>{''}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={' sm:mx-auto flex justify-center pt-20 md:w-2/4 w-full'}>
                {winner && (
                    <>
                        <p className={'mx-5 text-center'}><span
                            className={'text-3xl text-green-500 text-center'}>{winner}</span> is the winner!</p>
                    </>
                )}
                <button onClick={() => handleRestart()} className={'bg-slate-700 rounded px-5'}>Play Again
                </button>
            </div>
        </div>
    )
}
export default TikTak