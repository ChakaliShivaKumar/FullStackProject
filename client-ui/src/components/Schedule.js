import React from 'react'

function Schedule() {
  return (
    <div className='schedule' id='schedule'>
        <header>
            <div><h2>03</h2></div>
            <div><h2>SCHEDULE</h2></div>
        </header>
        <main>
        <div>
            <div className='schedule-am-pm'>
                <div><h6>AM</h6></div>
                <section>
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>09:15</h4></div>
                        <div className="schedule-am-event-by"><div>Maxine Hughes:</div> <div>Businesses that Shine</div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>10:00</h4></div>
                        <div className="schedule-am-event-by"><div>Networking</div> <div>Break</div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>10:45</h4></div>
                        <div className="schedule-am-event-by"><div>Joan Seymour:</div> <div>The Multitasking Myth</div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>11:30</h4></div>
                        <div className="schedule-am-event-by"><div>Lunch Break</div><div></div></div>
                    </div >
                </section>
            </div>
        </div>
        <div>
            <div className='schedule-am-pm'>
                <div><h6>PM</h6></div>
                <section>
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>14:00</h4></div>
                        <div className="schedule-am-event-by"><div>Rachel Moore: From
                            </div> <div>Associate to CEO</div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>15:30</h4></div>
                        <div className="schedule-am-event-by"><div>Hillary Getter: The Wonder
                            </div> <div>Women of Tech</div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>16:00</h4></div>
                        <div className="schedule-am-event-by"><div>Closing Remarks</div> <div></div></div>
                    </div >
                    <div className="schedule-am-event">
                        <div className="schedule-am-event-time"><h4>18:00</h4></div>
                        <div className="schedule-am-event-by"><div>Cocktails &</div> <div>Party</div></div>
                    </div >
                </section>
            </div>
        </div>
        </main>
    </div>
  )
}

export default Schedule