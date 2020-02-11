import React from 'react';
import CustomerList from '../components/CustomerList';

const CustomerPage = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div><h3>Customers</h3></div>
            <CustomerList/>
        </div>
    );
}

export default CustomerPage