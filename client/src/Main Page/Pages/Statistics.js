import '../CSS/Statistics.css'
const Statistics = () => 
{
    return ( 
        <>
            <div className="stats">
                <div class="item wow fadeInUpBig animated animated" data-number="12" style={{visibility: "visible"}}>
                    <i class="fa fa-briefcase"></i>
                    <p id="number1" class="number">12</p>
                    <span></span>
                    <p>Employees</p>
                </div>
                <div class="item wow fadeInUpBig animated animated" data-number="500" style={{visibility: "visible"}}>
                    <i class="fa fa-smile-o"></i>
                    <p id="number2" class="number">500</p>
                    <span></span>
                    <p>Happy clients</p>
                </div>
                <div class="item wow fadeInUpBig animated animated" data-number="5" style={{visibility: "visible"}}>
                    <i class="fa fa-clock-o"></i>
                    <p id="number3" class="number">5</p>
                    <span></span>
                    <p>Years of Experience</p>
                </div>
                <div class="item wow fadeInUpBig animated animated" data-number="50" style={{visibility: "visible"}}>
                    <i class="fa fa-laptop"></i>
                    <p id="number4" class="number">50</p>
                    <span></span>
                    <p>Projects underway</p>
                </div>
            </div>
        </>
     );
}
 
export default Statistics;