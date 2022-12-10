import React from 'react';
import './App.css'
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import PaymentsIcon from '@mui/icons-material/Payments';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
export default function Progress(){
return( 
    <div id="container">
        <div id="secondDiv">
           <table>
            <tr>
                <td><HomeIcon/>Dashboard</td>
            </tr>
            <tr>
            <td><PermIdentityIcon/>Employee{'<'}</td>
            </tr>
            <tr>
            <td><PermIdentityIcon/>Attendence{'<'}</td>
            </tr>
            <tr>
            <td><PregnantWomanIcon/>Site/Field Track{'<'}</td>
            </tr>
            <tr>
            <td><PaymentsIcon/>Payroll{'<'}</td>
            </tr>
            <tr>
            <td><BusinessCenterIcon/>Statuatory Compliances{'<'}</td>
            </tr>
            <tr>
            <td><CalendarTodayIcon/>Leaves{'<'}</td>
            </tr>
            <tr>
            <td><SettingsSuggestIcon/>Asset Management{'<'}</td>
            </tr>
            <tr>
            <td><TrendingUpIcon/>Goals & Performance{'<'}</td>
            </tr>
            <tr>
            <td><PermIdentityIcon/>Recruitment{'<'}</td>
            </tr>
            <tr>
            <td>Opening</td>
            </tr>
            <tr>
            <td>Candidates</td>
            </tr>
            <tr>
            <td>Interview Process</td>
            </tr>
           </table>

        </div>
        <div id="header">
            <p id="heading"><b><AccountCircleIcon/>INTERVIEW PROCESS<CancelIcon/></b></p>
        </div>
        <div id='maindiv'>
            
            <h5 id='name'>Name*</h5>
            <p id='title'>Business Development Executive</p>
            <p id='underline'>___________________________________</p>
            <h4 id='ipr'><CleaningServicesIcon/>Interview Process Rounds</h4>
            <div id='tablediv'>
                <p id="first">
                    <p id='level1'>Level*</p>
                    <p id='one'>1</p>
                    <p id='underline1'>_______________</p>
                </p>
                <p id='second'>
                    <p id='interviewname'>Name*</p>
                    <h5 id='interview'>Telephonic Round</h5>
                    <p id='underline2'>____________________</p>
                </p>
                <p id='third'>
                    <p id='interviewer'>Select Interviewer*</p>
                    <h5 id='intername'>GIRISHPARASAD KS</h5>
                    <p id='underline3'>____________________</p>
                </p>
                <p id='fourth'>
                    <p id='level2'>Level*</p>
                    <p id='two'>2</p>
                    <p id='underline4'>_______________</p>
                </p>
                <p id='fifth'>
                <p id='interviewname2'>Name*</p>
                    <h5 id='interview2'>Telephonic Round</h5>
                    <p id='underline5'>____________________</p>
                </p>
                <p id='sixth'>
                <p id='interviewer2'>Select Interviewer*</p>
                    <h5 id='intername2'>RAKESH APPAJI</h5>
                    <p id='underline6'>____________________</p>
                </p>
            </div>
            <button id='add'>ADD NEW</button>
            <button id='update'>UPDATE</button>
            <button id='cancel'>CANCEL</button>
        </div>
    </div>

)
}