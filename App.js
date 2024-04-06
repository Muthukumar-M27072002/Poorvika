// import logo from './logo.svg';
import './App.css';
import logo from './asset/poorvika_logo.svg'
import { ReactComponent as Logo1} from './asset/poorvika_logo.svg';

import { ReactComponent as Logo2} from './asset/Group.svg';
import { ReactComponent as Logo3} from './asset/report.svg';
import { Button, TextField, InputAdornment, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';

function App() {
  const Coupons = [{ coupon_name: 'Maahi', code: 'MSDThala', amount: 59, status: 'Scheduled', products: 'All Products', start_date: '1 hour ago', expiry: 'Today' },
  { coupon_name: 'Syed', code: 'WELCOME10', amount: 49, status: 'Scheduled', products: 'All Products', start_date: '2 hour ago', expiry: 'Tomorrow' },
  { coupon_name: 'Mehajabeen', code: 'LUCKY30', amount: 10, status: 'Expired', products: 'Mobiles', start_date: '3 hour ago', expiry: 'Yesterday' },
  { coupon_name: 'Sultana', code: 'SUMMER20', amount: 30, status: 'Expired', products: 'Laptops', start_date: '4 hour ago', expiry: 'Today' },
  { coupon_name: 'SMS', code: 'BKGHYATHOJ', amount: 40, status: 'Draft', products: 'Mobiles & Laptops', start_date: '5 hour ago', expiry: 'Tomorrow' },
  { coupon_name: 'Suma', code: 'A3589765865', amount: 50, status: 'Draft', products: 'First 5 Users', start_date: '6 hour ago', expiry: 'Yesterday' },
  { coupon_name: 'Sree', code: 'INSTA50', amount: 70, status: 'Active', products: 'Appliances', start_date: '7 hour ago', expiry: 'Today' },
  { coupon_name: 'Jayanth', code: 'HJKHK', amount: 80, status: 'Active', products: 'Gadgets', start_date: '8 hour ago', expiry: 'Tomorrow' },
  { coupon_name: 'Reddy', code: 'OIPOIPOI', amount: 90, status: 'Active', products: 'Mobiles & Laptops', start_date: '9 hour ago', expiry: 'Yesterday' },
  { coupon_name: 'Rajesh', code: 'IOIP', amount: 20, status: 'Active', products: 'All Products', start_date: '10 hour ago', expiry: 'Today' },
  { coupon_name: 'VIP MuthuKumar', code: 'MSDERTERTE', amount: 56, status: 'Active', products: 'All Products', start_date: '11 hour ago', expiry: 'Tomorrow' }]
  return (
    <>
      {/* <h2>Coupons</h2>
      <h3>Coupon Lists</h3>
      <table  className="app-padding" >
        <thead>
          <tr>
            <th>Coupon Name</th>
            <th>Code</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Products</th>
            <th>Start Date</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        {Coupons.map((item) => (
          <tbody>
            <tr>
              <td>{item.coupon_name}</td>
              <td>{item.code}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
              <td>{item.products}</td>
              <td>{item.start_date}</td>
              <td>{item.expiry}</td>
            </tr>
          </tbody>
        ))}
      </table> */}
      <div className="app" >
        
        <div className="SideBar" >
          <Logo1 />
          <div className='das-div'>
            <DashboardIcon />
            <p>Dashboard</p>
          </div>
          <div className='das-div'>
          <Logo2 />
            <p>Coupons</p>
          </div>
          <div className='das-div'>
          <Logo3 />
            <p>Reports</p>
          </div>
          <div className='das-div'>
            <HistoryIcon />
            <p>History</p>
          </div>
        </div>

        <div className="main-page" >
          <div className='title-div' >
            <h4 >Coupon Lists</h4>
            <Button className='primary-btn' variant="contained">Add New Coupon</Button>
          </div>
          <div>
            <div>
              <TextField
                label="With normal TextField"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Coupon Name</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Products</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Expiry</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Coupons.map((item, index) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell>{item.coupon_name}</TableCell>
                    <TableCell>{item.code}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.products}</TableCell>
                    <TableCell>{item.start_date}</TableCell>
                    <TableCell>{item.expiry}</TableCell>
                    <TableCell>
                      <EditIcon />
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
