import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function CalendarPage() {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem>
                        <DateCalendar className='mx-auto' defaultValue={dayjs('2023-11-26')} readOnly />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}

export default CalendarPage