import react from 'react';
import Cal, {Cal1,Cal2} from './Cal';

const Head='MyCalculator';
function Ans()
{
    return(
        <react.Fragment>
            <h6> The sum is {Cal(4,4)}</h6>
            <h6> The sum is {Cal1(4,4)}</h6>
            <h6> The sum is {Cal2(4,4)}</h6>
        </react.Fragment>

    );
}
export default Ans;
export {Head};
