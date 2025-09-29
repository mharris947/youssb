import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 2000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Jakob',
      lastName: 'Maas',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jMas',
      email: 'j*@gmail.com',
      jointNames: '',
      username: 'Jakobmaas-expired',
      password: 'Successful101-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 7200000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Lanie',
      lastName: 'Gardner',
      email: 'l*@gmail.com',
      jointNames: '',
      username: 'LanieGardner-expired',
      password: 'lanie6h3-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 250000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'July 22 2024, 2:03:08 am',
        description: 'Transfer to Ashley Gardner',
        status: 'Success',
        amount_usd: -20000.0,
        account_no: '****5001'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'February 14, 2024, 11:45:00 am',
        description: 'Transfer from DEF Holdings',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****7632'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'January 5, 2024, 3:30:00 pm',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 2000.0,
        account_no: '****1928'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 20, 2023, 2:15:00 pm',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9485'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'February 18, 2023, 9:50:00 am',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 6500.0,
        account_no: '****1829'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'January 11, 2023, 1:40:00 pm',
        description: 'Transfer from PQR Holdings',
        status: 'Success',
        amount_usd: 18300.0,
        account_no: '****2753'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 14, 2022, 11:30:00 am',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -15000.0,
        account_no: '****3847'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'March 20, 2022, 4:25:00 pm',
        description: 'Transfer to Amphenol',
        status: 'Success',
        amount_usd: -17500.0,
        account_no: '****5729'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'January 9, 2022, 9:15:00 am',
        description: 'Transfer from Cognizant Tech.',
        status: 'Success',
        amount_usd: 2400.0,
        account_no: '****6437'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'June 22, 2021, 10:00:00 am',
        description: 'Transfer from Danaher',
        status: 'Success',
        amount_usd: 5340.0,
        account_no: '****8192'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'April 17, 2021, 3:20:00 pm',
        description: 'Transfer from Kyndryl Holdings',
        status: 'Success',
        amount_usd: 1200.0,
        account_no: '****3427'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 5, 2021, 1:55:00 pm',
        description: 'Transfer from Amphenol',
        status: 'Success',
        amount_usd: 22000.0,
        account_no: '****4628'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'August 20, 2020, 11:45:00 am',
        description: 'Transfer from Aramark',
        status: 'Success',
        amount_usd: 2100.0,
        account_no: '****1382'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'June 15, 2020, 10:10:00 am',
        description: 'Transfer from Bella',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****5724'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'April 5, 2020, 3:40:00 pm',
        description: 'Transfer to Aramark',
        status: 'Success',
        amount_usd: -50000.0,
        account_no: '****1963'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'October 14, 2019, 11:25:00 am',
        description: 'Transfer to Bill Payment',
        status: 'Success',
        amount_usd: -500.0,
        account_no: '****7584'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'August 22, 2019, 2:00:00 pm',
        description: 'Transfer to Darden Restaurants',
        status: 'Success',
        amount_usd: 800.0,
        account_no: '****2738'
      },
      {
        transaction_id: 'TXN018',
        dateTime: 'June 8, 2019, 4:35:00 pm',
        description: 'Transfer from Danaher',
        status: 'Success',
        amount_usd: 15300.0,
        account_no: '****1827'
      },
      {
        transaction_id: 'TXN019',
        dateTime: 'December 12, 2018, 10:50:00 am',
        description: 'Transfer to Emerson Electric',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****5827'
      },
      {
        transaction_id: 'TXN020',
        dateTime: 'September 20, 2018, 3:15:00 pm',
        description: 'Transfer from Kyndryl Holdings',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****3281'
      },
      {
        transaction_id: 'TXN021',
        dateTime: 'July 9, 2018, 1:30:00 pm',
        description: 'Transfer from Marsh McLennan',
        status: 'Success',
        amount_usd: 22000.0,
        account_no: '****2638'
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Jacob Smith',
      lastName: '',
      email: 'j*@gmail.com',
      jointNames: '',
      username: "Smiths-expired",
      password: 'Iremide123-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 850000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN003',
        dateTime: 'January 5, 2024, 3:30:00 pm',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 2000.0,
        account_no: '****1928'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 20, 2023, 2:15:00 pm',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9485'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'February 18, 2023, 9:50:00 am',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 6500.0,
        account_no: '****1829'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'January 11, 2023, 1:40:00 pm',
        description: 'Transfer from PQR Holdings',
        status: 'Success',
        amount_usd: 18300.0,
        account_no: '****2753'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 14, 2022, 11:30:00 am',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -15000.0,
        account_no: '****3847'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'March 20, 2022, 4:25:00 pm',
        description: 'Transfer to Amphenol',
        status: 'Success',
        amount_usd: -17500.0,
        account_no: '****5729'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'January 9, 2022, 9:15:00 am',
        description: 'Transfer from Cognizant Tech.',
        status: 'Success',
        amount_usd: 2400.0,
        account_no: '****6437'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'June 22, 2021, 10:00:00 am',
        description: 'Transfer from Danaher',
        status: 'Success',
        amount_usd: 5340.0,
        account_no: '****8192'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'April 17, 2021, 3:20:00 pm',
        description: 'Transfer from Kyndryl Holdings',
        status: 'Success',
        amount_usd: 1200.0,
        account_no: '****3427'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 5, 2021, 1:55:00 pm',
        description: 'Transfer from Amphenol',
        status: 'Success',
        amount_usd: 22000.0,
        account_no: '****4628'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'August 20, 2020, 11:45:00 am',
        description: 'Transfer from Aramark',
        status: 'Success',
        amount_usd: 2100.0,
        account_no: '****1382'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'June 15, 2020, 10:10:00 am',
        description: 'Transfer from Bella',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****5724'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'April 5, 2020, 3:40:00 pm',
        description: 'Transfer to Aramark',
        status: 'Success',
        amount_usd: -50000.0,
        account_no: '****1963'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'October 14, 2019, 11:25:00 am',
        description: 'Transfer to Bill Payment',
        status: 'Success',
        amount_usd: -500.0,
        account_no: '****7584'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'August 22, 2019, 2:00:00 pm',
        description: 'Transfer to Darden Restaurants',
        status: 'Success',
        amount_usd: 800.0,
        account_no: '****2738'
      },
      {
        transaction_id: 'TXN018',
        dateTime: 'June 8, 2019, 4:35:00 pm',
        description: 'Transfer from Danaher',
        status: 'Success',
        amount_usd: 15300.0,
        account_no: '****1827'
      },
      {
        transaction_id: 'TXN019',
        dateTime: 'December 12, 2018, 10:50:00 am',
        description: 'Transfer to Emerson Electric',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****5827'
      },
      {
        transaction_id: 'TXN020',
        dateTime: 'September 20, 2018, 3:15:00 pm',
        description: 'Transfer from Kyndryl Holdings',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****3281'
      },
      {
        transaction_id: 'TXN021',
        dateTime: 'July 9, 2018, 1:30:00 pm',
        description: 'Transfer from Marsh McLennan',
        status: 'Success',
        amount_usd: 22000.0,
        account_no: '****2638'
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      fullName: 'Richard',
      lastName: 'Storm',
      email: 'r*@gmail.com',
      jointNames: '',
      username: 'MargretBartfield-expired',
      password: 'Richie98$5-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'July 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2024, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2024, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2023, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'May 23 2023, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2022, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2022, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2022, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'November 16, 2021, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'October 23 2021, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2021, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'May 12, 2020, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2020, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'August 23 2019, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      fullName: 'Roland',
      lastName: 'Nashoba',
      email: 'rolandnashoba@gmail.com',
      jointNames: '',
      username: 'rolandnashoba-expired',
      password: 'Nashoba090@-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 928000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 13 2017, 3:32:32 pm',
        description: 'Magnolia Oil & Gas Corporation',
        status: 'Success',
        amount_usd: 862700.0,
        account_no: '****5009'
      },

      {
        transaction_id: 'TXN002',
        dateTime: 'March 13 2017, 1:04:02 pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 16000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'October 27 2016, 11:00:12 am',
        description: 'Brunt Work Wear and Maintenance Service',
        status: 'Success',
        amount_usd: -1000.0,
        account_no: '****5242'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 15 2015, 11:00:12 am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****1436'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'April 3 2015, 4:22:03 pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -15000.0,
        account_no: '****9422'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'January 15 2015, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****0038'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'January 8 2014, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 2100.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'July 2 2013, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'May 23 2013, 1:15:02 pm',
        description: 'Transfer from BT Group',
        status: 'Success',
        amount_usd: 49000.0,
        account_no: '****1403'
      }
    ]
  },
  {
    account_id: 'ACC007',
    holder: {
      fullName: 'Ailbert Stan',
      lastName: '',
      email: 'loganstan1111@gmail.com',
      jointNames: '',
      username: 'loganstan1111-expired',
      password: 'Ailbertmackyla$1111-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3670890.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 15 2024',
        description: 'Transfer from Ailbert Mackyla',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 18 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -250.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 1 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1250.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 15 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'February 8 2024',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'July 2 2023',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 23 2023',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'April 23 2022',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'March 15, 2022',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 28300.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'February 12, 2022',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'November 16, 2021',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'October 23 2021',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'March 15, 2021',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'May 12, 2020',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'April 16, 2020',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'August 23 2019',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN018',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC008',
    holder: {
      fullName: 'Hannna',
      lastName: 'Rothrock',
      email: 'h@gmail.com',
      jointNames: '',
      username: 'hannnarothrock1-expired',
      password: 'qjVByh4PDAs8-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 15 2024',
        description: 'Transfer from Ailbert Mackyla',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 18 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -250.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 1 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1250.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 15 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'February 8 2024',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'July 2 2023',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 23 2023',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'April 23 2022',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'March 15, 2022',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 28300.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'February 12, 2022',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'November 16, 2021',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'October 23 2021',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'March 15, 2021',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'May 12, 2020',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'April 16, 2020',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'August 23 2019',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN018',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC009',
    holder: {
      fullName: 'Christopher Bright C.',
      lastName: '',
      email: 'c@gmail.com',
      jointNames: '',
      username: 'Christopher1979-expired',
      password: 'Bella@1979-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 760870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms ',
        status: 'Success',
        amount_usd: 4000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC010',
    holder: {
      fullName: 'Vannesa',
      lastName: 'Alex',
      email: 'v@gmail.com',
      jointNames: '',
      username: 'Venessa1979-expired',
      password: 'Daughter001-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2160737.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'October 1 2024',
        description: 'Transfer to Charity Home Ca. ',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 15 2024',
        description: 'Celeb City Farms ',
        status: 'Success',
        amount_usd: 4000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'September 10 2024',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'December 5 2023',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2023',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2022',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2022',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2021',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2021',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2020',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2020',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC011',
    holder: {
      fullName: 'Connie',
      lastName: 'Curran',
      email: 'c@gmail.com',
      jointNames: '',
      username: 'Curran1854-expired',
      password: 'Curran12@-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1128000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'October 1 2024',
        description: 'Housing Payment',
        status: 'Success',
        amount_usd: 550000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 23 2024',
        description: 'Car Payment',
        status: 'Success',
        amount_usd: 120000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'September 10 2024',
        description: 'Antique Materials',
        status: 'Success',
        amount_usd: 85000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 780000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2023',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2022',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2022',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2021',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2021',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2020',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2020',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC012',
    holder: {
      fullName: 'Cooper',
      lastName: 'Alan',
      email: 'c@gmail.com',
      jointNames: '',
      username: 'cooper123-expired',
      password: 'Timalan12$-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'October 1 2024',
        description: 'Housing Payment',
        status: 'Success',
        amount_usd: 5500.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 23 2024',
        description: 'Car Payment',
        status: 'Success',
        amount_usd: 1200.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'September 10 2024',
        description: 'Antique Materials',
        status: 'Success',
        amount_usd: 8500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 7800.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2023',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2022',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2022',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2021',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2021',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2020',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2020',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC013',
    holder: {
      fullName: 'Richard',
      lastName: 'Laure',
      email: 'r@gmail.com',
      jointNames: '',
      username: 'Richard109-expired',
      password: 'Chard@001-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 300000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'November 10 2024',
        description: 'Transfer from Charity Home Ca. ',
        status: 'Success',
        amount_usd: 5000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 15 2024',
        description: 'Celeb City Farms ',
        status: 'Success',
        amount_usd: 4000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'September 10 2024',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'December 5 2023',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2023',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2022',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2022',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2021',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2021',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2020',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2020',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  },
  {
    account_id: 'ACC014',
    holder: {
      fullName: 'Troy W Robbinson',
      lastName: '',
      email: 't***@gmail.com',
      jointNames: '',
      username: 'Weldertroy2019-expired',
      password: 'TroyRob2030-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 964587.2
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 23 2024, 8:50am',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 170000.0
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 5 2024, 1:03:05pm',
        description: 'Wells Fargo CD profit XXXXXX8324',
        status: 'Success',
        amount_usd: 41840.4
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 6 2024, 3:00:02pm',
        description: 'Tfr from Fort Worth Welders Supply Inc XXXXXX8324',
        status: 'Success',
        amount_usd: 98000.0
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 9 2024, 5:15:02pm',
        description: 'Tfr from Forney Fence Supply XXXXXX8324',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'June 19 2024, 1:03:05pm',
        description: 'Wells Fargo CD profit XXXXXX8324',
        status: 'Success',
        amount_usd: 45840.4
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'May 13 2024, 2:10:06pm ',
        description: 'Tfr from Lincoln Electrics XXXXXX8324 Funds Transfer',
        status: 'Success',
        amount_usd: 45650.8
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 3 2024, 4:22:05pm',
        description: 'Metroplex Welding Supply Inc ',
        status: 'Success',
        amount_usd: -42450.5
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'April 8 2024, 10:11:22am',
        description: 'Tfr from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 65500.7
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'March 30 2024, 2:06pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -7500.5
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2024, 8:50am',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 450754.9
      }
    ]
  },
  {
    account_id: 'ACC015',
    holder: {
      fullName: 'Wood Andra B.',
      lastName: '',
      email: 'w***@gmail.com',
      dateCreated: '1/10/2025',
      username: 'WoodbeckieRoddy!',
      password: 'JasonwayneRoddy'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 760870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'To complete your requested transfer a mandatory VAT processing fee of $758.85 is required This charge complies with updated financial regulations and ensures the secure and timely handling of all transactions. If you have any questions or need further assistance please feel free to reach out to us. Thank you',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'August 23 2018, 8:50am',
        description: 'Transfer to Nikky&co enterprises',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018, 8:50am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'November 15 2023, 12:45:00pm',
        description: 'Office Supplies Purchase',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'April 9 2022, 11:30:45am',
        description: 'Refund from Vendor',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'February 18 2021, 10:05:23am',
        description: 'IT Equipment Maintenance',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020, 2:22:11pm',
        description: 'Transfer to Company Savings',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'July 4 2019, 3:14:52pm',
        description: 'Employee Travel Reimbursement',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 10 2018, 4:50:35pm',
        description: 'Transfer from Parent Organization',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC015',
    holder: {
      fullName: 'James Mia M.',
      lastName: '',
      email: 'j***@gmail.com',
      dateCreated: '1/11/2025', // m/d/y
      username: 'jamesmia1-expired',
      password: 'Nou17053583$-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 965870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 8 2025',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'January 5 2025',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -500.0
      },
      {
        dateTime: 'October 1 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'September 23 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 10 2024',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'August 23 2018, 8:50am',
        description: 'Transfer to Nikky&co enterprises',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018, 8:50am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'November 15 2023, 12:45:00pm',
        description: 'Office Supplies Purchase',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'April 9 2022, 11:30:45am',
        description: 'Refund from Vendor',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'February 18 2021, 10:05:23am',
        description: 'IT Equipment Maintenance',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020, 2:22:11pm',
        description: 'Transfer to Company Savings',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'July 4 2019, 3:14:52pm',
        description: 'Employee Travel Reimbursement',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 10 2018, 4:50:35pm',
        description: 'Transfer from Parent Organization',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC016',
    holder: {
      fullName: 'Sharon Ben Fechter',
      lastName: '',
      email: 's***@gmail.com',
      dateCreated: '1/24/2025', // m/d/y
      username: 'Sharon4122-expired',
      password: 'Tomisthe14me-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 799350.71
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 23 2025',
        description: 'Transfer from Paris Event',
        status: 'Success',
        amount_usd: 750000.0
      },
      {
        dateTime: 'January 20 2025',
        description: 'PetroQuest Energy Payment',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'January 18 2025',
        description: 'W&T Offshore Invoice',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'January 17 2025',
        description: 'Comstock Resources Contract',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 15 2025',
        description: 'Abraxas Petroleum Settlement',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 13 2025',
        description: 'Northern Oil and Gas Royalty',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'January 12 2025',
        description: 'Earthstone Energy Licensing',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'October 1 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'September 23 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 10 2024',
        description: 'Transfer from Cory Mack',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'August 23 2018, 8:50am',
        description: 'Transfer to Nikky&co enterprises',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018, 8:50am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'November 15 2023, 12:45:00pm',
        description: 'Office Supplies Purchase',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'April 9 2022, 11:30:45am',
        description: 'Refund from Vendor',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'February 18 2021, 10:05:23am',
        description: 'IT Equipment Maintenance',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020, 2:22:11pm',
        description: 'Transfer to Company Savings',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'July 4 2019, 3:14:52pm',
        description: 'Employee Travel Reimbursement',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 10 2018, 4:50:35pm',
        description: 'Transfer from Parent Organization',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC017',
    holder: {
      fullName: 'John Dawn',
      lastName: '',
      email: 'j***@gmail.com',
      dateCreated: '1/25/2025', // m/d/y
      username: 'Johndawn-expired',
      password: 'Johndawn$$-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 700530.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 23 2025',
        description: 'Transfer from Paris Event',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 20 2025',
        description: 'PetroQuest Energy Payment',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'January 18 2025',
        description: 'W&T Offshore Invoice',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'January 17 2025',
        description: 'Comstock Resources Contract',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 15 2025',
        description: 'Abraxas Petroleum Settlement',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 13 2025',
        description: 'Northern Oil and Gas Royalty',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'January 12 2025',
        description: 'Earthstone Energy Licensing',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'October 1 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'September 23 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 10 2024',
        description: 'Transfer from Cory Mack',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'August 23 2018, 8:50am',
        description: 'Transfer to Nikky&co enterprises',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018, 8:50am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'November 15 2023, 12:45:00pm',
        description: 'Office Supplies Purchase',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'April 9 2022, 11:30:45am',
        description: 'Refund from Vendor',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'February 18 2021, 10:05:23am',
        description: 'IT Equipment Maintenance',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020, 2:22:11pm',
        description: 'Transfer to Company Savings',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'July 4 2019, 3:14:52pm',
        description: 'Employee Travel Reimbursement',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 10 2018, 4:50:35pm',
        description: 'Transfer from Parent Organization',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC018',
    holder: {
      fullName: 'LimeLifeByAlcone LLC',
      lastName: '',
      email: 'l***@gmail.com',
      dateCreated: '1/28/2025', // m/d/y
      username: 'spoiltmama9t9-expired',
      password: 'Eteniaharri@1-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1200850.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 17 2025',
        description: 'Incoming Wire Transfer',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'January 15 2025',
        description: 'Transfer to Noor Bank, Dubai',
        status: 'Success',
        amount_usd: -83400.0
      },
      {
        dateTime: 'January 12 2025',
        description: 'Coya Dubai, Dubai',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'January 10 2025',
        description: 'Uber Ride Payment',
        status: 'Success',
        amount_usd: -35.75
      },
      {
        dateTime: 'January 8 2025',
        description: 'Walmart Grocery Shopping',
        status: 'Success',
        amount_usd: -1120.45
      },
      {
        dateTime: 'January 5 2025',
        description: 'Bulgari Resort Dubai',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'January 3 2025',
        description: 'Wire Transfer to Good Purchase store',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'January 2 2025',
        description: 'Incoming Wire Transfer',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'January 1 2025',
        description: 'Groceries',
        status: 'Success',
        amount_usd: -850.0
      },
      {
        dateTime: 'December 29 2024',
        description: 'Uber Ride Payment',
        status: 'Success',
        amount_usd: -45.0
      },
      {
        dateTime: 'December 28 2024',
        description: 'Shopping at Dubai Mall',
        status: 'Success',
        amount_usd: -3150.0
      },
      {
        dateTime: 'December 20 2024',
        description: 'Wire Transfer from Al Habtoor Group, Dubai',
        status: 'Success',
        amount_usd: 175000.0
      },
      {
        dateTime: 'December 18 2024',
        description: 'Refund, walmart Getex',
        status: 'Success',
        amount_usd: 450.0
      }
    ]
  },
  {
    account_id: 'ACC019',
    holder: {
      fullName: 'Jada Bostic',
      lastName: '',
      email: 'j*@gmail.com',
      dateCreated: '2/12/2025', // m/d/y
      username: 'Jadabosti24@-expired',
      password: 'Bostic34@-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 50140.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer from Crew Energy Inc',
        status: 'Success',
        amount_usd: 18500.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Incoming Wire Transfer',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'January 15, 2025',
        description: 'Transfer to Citybank, Illinois',
        status: 'Success',
        amount_usd: -83400.0
      },
      {
        dateTime: 'January 12, 2025',
        description: 'Coya Dubai, Dubai',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Uber Ride Payment',
        status: 'Success',
        amount_usd: -35.75
      },
      {
        dateTime: 'January 8, 2025',
        description: 'Walmart Grocery Shopping',
        status: 'Success',
        amount_usd: -1120.45
      },
      {
        dateTime: 'January 5, 2025',
        description: 'Bulgari Resort',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Wire Transfer to Good Purchase store',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'January 2, 2025',
        description: 'Incoming Wire Transfer',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'January 1, 2025',
        description: 'Groceries',
        status: 'Success',
        amount_usd: -850.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Uber Ride Payment',
        status: 'Success',
        amount_usd: -45.0
      },
      {
        dateTime: 'December 28, 2024',
        description: 'Shopping at Dubai Mall',
        status: 'Success',
        amount_usd: -3150.0
      },
      {
        dateTime: 'December 20, 2024',
        description: 'Wire Transfer from Al Habtoor Group',
        status: 'Success',
        amount_usd: 175000.0
      },
      {
        dateTime: 'December 18, 2024',
        description: 'Refund, walmart Getex',
        status: 'Success',
        amount_usd: 450.0
      }
    ]
  },
  {
    account_id: 'ACC020',
    holder: {
      fullName: 'Steve Alexander',
      email: 'j*@gmail.com',
      dateCreated: '2/12/2025', // m/d/y
      username: 'Stevealexander12-expired',
      password: 'Steve123-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 964587.2
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 13, 2025',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 170000.0
      },
      {
        dateTime: 'January 22, 2025',
        description: 'Wells Fargo CD profit XXXXXX8324',
        status: 'Success',
        amount_usd: 41840.4
      },
      {
        dateTime: 'December 20, 2024',
        description: 'Transfer from Fort Worth Welders Supply Inc XXXXXX8324',
        status: 'Success',
        amount_usd: 98000.0
      },
      {
        dateTime: 'November 9, 2024',
        description: 'Transfer from Forney Fence Supply XXXXXX8324',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'October 19, 2024',
        description: 'Wells Fargo CD profit XXXXXX8324',
        status: 'Success',
        amount_usd: 45840.4
      },
      {
        dateTime: 'September 13, 2024',
        description: 'Transfer from Lincoln Electrics XXXXXX8324 Funds Transfer',
        status: 'Success',
        amount_usd: 45650.8
      },
      {
        dateTime: 'August 3, 2024',
        description: 'Metroplex Welding Supply Inc',
        status: 'Success',
        amount_usd: -42450.5
      },
      {
        dateTime: 'July 8, 2024',
        description: 'Transfer from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 65500.7
      },
      {
        dateTime: 'June 30, 2024',
        description: 'Bammy work wear and maintenance',
        status: 'Success',
        amount_usd: -7500.5
      },
      {
        dateTime: 'May 23, 2024',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 450754.9
      }
    ]
  },
  {
    account_id: 'ACC021',
    holder: {
      fullName: 'Dave Davis',
      email: 'd*@gmail.com',
      dateCreated: '2/27/2025', // m/d/y
      username: 'Dave68-expired',
      password: 'Foreverbond68-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'You’re almost there Dave, Pay $1750 fee to finished activating your account',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 23, 2025',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 305000.0
      }
    ]
  },
  {
    account_id: 'ACC022',
    holder: {
      fullName: 'Raymond Phillip',
      email: 'r*@gmail.com',
      dateCreated: '3/9/2025', // m/d/y
      username: 'Lora1977-expired',
      password: 'Wealth2017-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 800356.59
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 7, 2025',
        description: 'Transfer from NovaTech Solutions XXXXXX1290',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        dateTime: 'February 23, 2025',
        description: 'Transfer to Stellar Enterprises XXXXXX7834',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer from Apex Corp XXXXXX4567',
        status: 'Success',
        amount_usd: 16000.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Transfer from John Peters XXXXXX9821',
        status: 'Success',
        amount_usd: 8700.0
      },
      {
        dateTime: 'January 15, 2025',
        description: 'Transfer from Quantum Dynamics XXXXXX7632',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        dateTime: 'December 12, 2024',
        description: 'Transfer to Bright Future Ltd XXXXXX1112',
        status: 'Success',
        amount_usd: -7200.0
      },
      {
        dateTime: 'November 27, 2023',
        description: 'Transfer from Clara Morgan XXXXXX3356',
        status: 'Success',
        amount_usd: 13000.0
      },
      {
        dateTime: 'August 13, 2023',
        description: 'Transfer to Horizon Tech XXXXXX8429',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'May 21, 2023',
        description: 'Transfer from Zenith Global XXXXXX5500',
        status: 'Success',
        amount_usd: 12500.0
      },
      {
        dateTime: 'February 10, 2022',
        description: 'Transfer from Lisa Fernandez XXXXXX2308',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'October 8, 2021',
        description: 'Transfer from Omega Ventures XXXXXX9001',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'July 14, 2020',
        description: 'Transfer to Daniel Craig XXXXXX4507',
        status: 'Success',
        amount_usd: -5800.0
      },
      {
        dateTime: 'March 19, 2019',
        description: 'Transfer from Summit Corp XXXXXX6725',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'December 2, 2018',
        description: 'Transfer to Helen Motors XXXXXX1234',
        status: 'Success',
        amount_usd: -5500.0
      },
      {
        dateTime: 'November 15, 2017',
        description: 'Transfer from Alpha Holdings XXXXXX7788',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'August 3, 2017',
        description: 'Transfer to Jason Lee XXXXXX9992',
        status: 'Success',
        amount_usd: -5300.0
      },
      {
        dateTime: 'May 29, 2017',
        description: 'Transfer from BrightStar Ltd XXXXXX2241',
        status: 'Success',
        amount_usd: 9700.0
      },
      {
        dateTime: 'March 18, 2017',
        description: 'Transfer to Sarah Connor XXXXXX8820',
        status: 'Success',
        amount_usd: -5100.0
      },
      {
        dateTime: 'January 10, 2017',
        description: 'Transfer from Horizon Enterprises XXXXXX7777',
        status: 'Success',
        amount_usd: 9500.0
      },
      {
        dateTime: 'November 20, 2016',
        description: 'Transfer to GreenTech Corp XXXXXX4448',
        status: 'Success',
        amount_usd: -4900.0
      }
    ]
  },
  {
    account_id: 'ACC023',
    holder: {
      fullName: 'Gionna Daddio',
      email: 'g*@gmail.com',
      dateCreated: '3/15/2025', // m/d/y
      username: 'Gionnadaddio-expired',
      password: 'Luckman247$-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2300456.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 7, 2022',
        description: 'Transfer from NovaTech Solutions XXXXXX1290',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        dateTime: 'February 23, 2022',
        description: 'Transfer to Stellar Enterprises XXXXXX7834',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'February 10, 2022',
        description: 'Transfer from Apex Corp XXXXXX4567',
        status: 'Success',
        amount_usd: 16000.0
      },
      {
        dateTime: 'January 28, 2022',
        description: 'Transfer to Good Purchase store XXXXXX9821',
        status: 'Success',
        amount_usd: -8700.0
      }
    ]
  },
  {
    account_id: 'ACC024',
    holder: {
      fullName: 'Lee Christopher Stanley',
      email: 'l*@gmail.com',
      dateCreated: '3/20/2025', // m/d/y
      username: 'LeeChristopher-expired',
      password: 'Iloveher@$123-expired'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3634724.8
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 25, 2025',
        description: 'Transfer from United Nation - XXXXXX4821',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer from United Nation - XXXXXX9173',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'December 25, 2024',
        description: 'Transfer from United Nation - XXXXXX2856',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'Transfer from United Nation - XXXXXX5632',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from United Nation - XXXXXX7489',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 25, 2024',
        description: 'Transfer from United Nation - XXXXXX3951',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from United Nation - XXXXXX6297',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'July 25, 2024',
        description: 'Transfer from United Nation - XXXXXX8712',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'June 25, 2024',
        description: 'Transfer from United Nation - XXXXXX4208',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'May 25, 2024',
        description: 'Transfer from United Nation - XXXXXX1764',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'April 25, 2024',
        description: 'Transfer from United Nation - XXXXXX9583',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'March 25, 2024',
        description: 'Transfer from United Nation - XXXXXX6125',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'February 25, 2024',
        description: 'Transfer from United Nation - XXXXXX8347',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'January 25, 2024',
        description: 'Transfer from United Nation - XXXXXX1092',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'December 25, 2023',
        description: 'Transfer from United Nation - XXXXXX4678',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'November 25, 2023',
        description: 'Transfer from United Nation - XXXXXX8213',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'October 25, 2023',
        description: 'Transfer from United Nation - XXXXXX3047',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Transfer from United Nation - XXXXXX5782',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'August 25, 2023',
        description: 'Transfer from United Nation - XXXXXX9136',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'July 25, 2023',
        description: 'Transfer from United Nation - XXXXXX2694',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'June 25, 2023',
        description: 'Transfer from United Nation - XXXXXX7451',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'May 25, 2023',
        description: 'Transfer from United Nation - XXXXXX3872',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'April 25, 2023',
        description: 'Transfer from United Nation - XXXXXX6248',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'March 25, 2023',
        description: 'Transfer from United Nation - XXXXXX9527',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'February 25, 2023',
        description: 'Transfer from United Nation - XXXXXX1785',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'January 25, 2023',
        description: 'Transfer from United Nation - XXXXXX4278',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC025',
    holder: {
      fullName: 'Mickie Laree James',
      email: 'm*@gmail.com',
      dateCreated: '4/15/2025', // m/d/y
      username: 'Mickiebill$',
      password: 'mickiebill123@'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3634724.8
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer to Gerald William Almond XXXXXX1187',
        status: 'Pending',
        amount_usd: -65000.0
      },
      {
        dateTime: 'April 11, 2025',
        description: 'Transfer from NovaTech Solutions XXXXXX3874',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'March 7, 2025',
        description: 'Transfer from NovaTech Solutions XXXXXX1290',
        status: 'Success',
        amount_usd: 112000.0
      },
      {
        dateTime: 'February 23, 2025',
        description: 'Transfer to Stellar Enterprises XXXXXX7834',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer from Apex Corp XXXXXX4567',
        status: 'Success',
        amount_usd: 225000.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Transfer to John Peters XXXXXX9821',
        status: 'Success',
        amount_usd: -8700.0
      },
      {
        dateTime: 'January 15, 2025',
        description: 'Transfer from Quantum Dynamics XXXXXX7632',
        status: 'Success',
        amount_usd: 350000.0
      },
      {
        dateTime: 'December 12, 2024',
        description: 'Transfer to Bright Future Ltd XXXXXX1112',
        status: 'Success',
        amount_usd: -7200.0
      },
      {
        dateTime: 'November 27, 2023',
        description: 'Transfer from Clara Morgan XXXXXX3356',
        status: 'Success',
        amount_usd: 138000.0
      },
      {
        dateTime: 'August 13, 2023',
        description: 'Transfer from Horizon Tech XXXXXX8429',
        status: 'Success',
        amount_usd: 175000.0
      },
      {
        dateTime: 'May 21, 2023',
        description: 'Transfer to Zenith Global XXXXXX5500',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'February 10, 2022',
        description: 'Transfer from Lisa Fernandez XXXXXX2308',
        status: 'Success',
        amount_usd: 60000.0
      },
      {
        dateTime: 'October 8, 2021',
        description: 'Transfer from Omega Ventures XXXXXX9001',
        status: 'Success',
        amount_usd: 415500.0
      },
      {
        dateTime: 'July 14, 2020',
        description: 'Transfer to Daniel Craig XXXXXX4507',
        status: 'Success',
        amount_usd: -5800.0
      },
      {
        dateTime: 'March 19, 2019',
        description: 'Transfer from Summit Corp XXXXXX6725',
        status: 'Success',
        amount_usd: 102500.0
      },
      {
        dateTime: 'December 2, 2018',
        description: 'Transfer to Helen Motors XXXXXX1234',
        status: 'Success',
        amount_usd: -5500.0
      },
      {
        dateTime: 'November 15, 2017',
        description: 'Transfer from Alpha Holdings XXXXXX7788',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        dateTime: 'August 3, 2017',
        description: 'Transfer to Jason Lee XXXXXX9992',
        status: 'Success',
        amount_usd: -5300.0
      },
      {
        dateTime: 'May 29, 2017',
        description: 'Transfer from BrightStar Ltd XXXXXX2241',
        status: 'Success',
        amount_usd: 97000.0
      },
      {
        dateTime: 'March 18, 2017',
        description: 'Transfer to Sarah Connor XXXXXX8820',
        status: 'Success',
        amount_usd: -5100.0
      },
      {
        dateTime: 'January 10, 2017',
        description: 'Transfer from Horizon Enterprises XXXXXX7777',
        status: 'Success',
        amount_usd: 95000.0
      },
      {
        dateTime: 'November 20, 2016',
        description: 'Transfer to GreenTech Corp XXXXXX4448',
        status: 'Success',
        amount_usd: -4900.0
      }
    ]
  },
  {
    account_id: 'ACC026',
    holder: {
      fullName: 'Roland Moore',
      email: 'r*@gmail.com',
      dateCreated: '4/15/2025', // m/d/y
      username: 'Rolandmoore',
      password: 'Roland#moore14'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1734724.8
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 21, 2024',
        description: 'Transfer from Gerald William Almond XXXXXX1187',
        status: 'Success',
        amount_usd: 6500.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Transfer from NovaTech Solutions XXXXXX3874',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'December 9, 2024',
        description: 'Transfer to Bright Future Ltd XXXXXX1112',
        status: 'Success',
        amount_usd: -7200.0
      },
      {
        dateTime: 'December 3, 2024',
        description: 'Transfer from Quantum Dynamics XXXXXX7632',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        dateTime: 'November 26, 2024',
        description: 'Transfer to Stellar Enterprises XXXXXX7834',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'November 14, 2024',
        description: 'Transfer from Apex Corp XXXXXX4567',
        status: 'Success',
        amount_usd: 22500.0
      },
      {
        dateTime: 'November 7, 2024',
        description: 'Transfer to John Peters XXXXXX9821',
        status: 'Success',
        amount_usd: -8700.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Clara Morgan XXXXXX3356',
        status: 'Success',
        amount_usd: 13800.0
      },
      {
        dateTime: 'October 23, 2024',
        description: 'Transfer from NovaTech Solutions XXXXXX1290',
        status: 'Success',
        amount_usd: 11200.0
      },
      {
        dateTime: 'October 18, 2024',
        description: 'Transfer from Horizon Tech XXXXXX8429',
        status: 'Success',
        amount_usd: 17500.0
      },
      {
        dateTime: 'October 11, 2024',
        description: 'Transfer to Zenith Global XXXXXX5500',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'October 4, 2024',
        description: 'Transfer from Lisa Fernandez XXXXXX2308',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'September 28, 2024',
        description: 'Transfer from Omega Ventures XXXXXX9001',
        status: 'Success',
        amount_usd: 41500.0
      },
      {
        dateTime: 'September 20, 2024',
        description: 'Transfer to Daniel Craig XXXXXX4507',
        status: 'Success',
        amount_usd: -5800.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'Transfer from Summit Corp XXXXXX6725',
        status: 'Success',
        amount_usd: 1000.0
      },
      {
        dateTime: 'September 6, 2024',
        description: 'Transfer to Helen Motors XXXXXX1234',
        status: 'Success',
        amount_usd: -5500.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from Alpha Holdings XXXXXX7788',
        status: 'Success',
        amount_usd: 10800.0
      },
      {
        dateTime: 'August 19, 2024',
        description: 'Transfer to Jason Lee XXXXXX9992',
        status: 'Success',
        amount_usd: -5300.0
      },
      {
        dateTime: 'August 11, 2024',
        description: 'Transfer from BrightStar Ltd XXXXXX2241',
        status: 'Success',
        amount_usd: 9700.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer to Sarah Connor XXXXXX8820',
        status: 'Success',
        amount_usd: -5100.0
      },
      {
        dateTime: 'July 30, 2024',
        description: 'Transfer from Horizon Enterprises XXXXXX7777',
        status: 'Success',
        amount_usd: 95000.0
      },
      {
        dateTime: 'July 21, 2024',
        description: 'Transfer to GreenTech Corp XXXXXX4448',
        status: 'Success',
        amount_usd: -4900.0
      }
    ]
  },
  {
    account_id: 'ACC027',
    holder: {
      fullName: 'Jessica Raymond',
      email: 'bigrymondjessica@gmail.com',
      dateCreated: '4/26/2025', // m/d/y
      username: 'bigrymondjessica',
      password: 'SHANEP11'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 50108.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 26, 2025',
        description: 'Transfer from Bright Future Ltd - XXXXXX1187',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'April 24, 2025',
        description: 'Vat Fee - XXXXXX4838',
        status: 'Success',
        amount_usd: 15.0
      },
      {
        dateTime: 'April 20, 2025',
        description: 'Vat Fee - XXXXXX8477',
        status: 'Success',
        amount_usd: 15.0
      },
      {
        dateTime: 'April 17, 2025',
        description: 'Vat Fee - XXXXXX6567',
        status: 'Success',
        amount_usd: 20.0
      },
      {
        dateTime: 'April 13, 2025',
        description: 'Vat Fee - XXXXXX3484',
        status: 'Success',
        amount_usd: 20.0
      },
      {
        dateTime: 'April 10, 2025',
        description: 'Vat Fee - XXXXXX3573',
        status: 'Success',
        amount_usd: 30.0
      }
    ]
  },
  {
    account_id: 'ACC028',
    holder: {
      fullName: 'Tina James A',
      email: 'bigrymondjessica@gmail.com',
      dateCreated: '5/3/2025', // m/d/y
      dateUpdated: '6/9/2025', // m/d/y
      username: 'tinaaugust$4',
      password: 'tinaRTC@05'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 50000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $8,300. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 9, 2025, 02:00:27 am',
        description: 'Payment from Tax - XXXXXX4812',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 03:12:15 am',
        description: 'Payment from Tax - XXXXXX2923',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 04:18:41 am',
        description: 'Payment from Tax - XXXXXX1748',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 05:25:03 am',
        description: 'Payment from Tax - XXXXXX5371',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 06:39:58 am',
        description: 'Payment from Tax - XXXXXX8145',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 07:07:12 am',
        description: 'Payment from Tax - XXXXXX6902',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 08:28:50 am',
        description: 'Payment from Tax - XXXXXX3847',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 09:14:33 am',
        description: 'Payment from Tax - XXXXXX9876',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 10:42:19 am',
        description: 'Payment from Tax - XXXXXX2415',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 11:05:01 am',
        description: 'Payment from Tax - XXXXXX6034',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 12:48:37 pm',
        description: 'Payment from Tax - XXXXXX3261',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 01:19:26 pm',
        description: 'Payment from Tax - XXXXXX7582',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 02:33:40 pm',
        description: 'Payment from Tax - XXXXXX4423',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 03:59:17 pm',
        description: 'Payment from Tax - XXXXXX1356',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 04:22:06 pm',
        description: 'Payment from Tax - XXXXXX9031',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 05:36:54 pm',
        description: 'Payment from Tax - XXXXXX7210',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 06:03:45 pm',
        description: 'Payment from Tax - XXXXXX5492',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 07:27:18 pm',
        description: 'Payment from Tax - XXXXXX3587',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 09:16:04 pm',
        description: 'Payment from Tax - XXXXXX6174',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 9, 2025, 11:00:59 pm',
        description: 'Payment from Tax - XXXXXX4863',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'May 19, 2025, 09:10:17 am',
        description: 'Payment from Tax - XXXXXX4837',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 09:05:29 am',
        description: 'Payment from Tax - XXXXXX9274',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 09:01:53 am',
        description: 'Payment from Tax - XXXXXX1032',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 08:57:38 am',
        description: 'Payment from Tax - XXXXXX7821',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 08:55:21 am',
        description: 'Payment from Tax - XXXXXX2390',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 08:50:02 am',
        description: 'Payment from Tax - XXXXXX5948',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 08:45:56 am',
        description: 'Payment from Tax - XXXXXX3701',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 05:15:19 am',
        description: 'Payment from Tax - XXXXXX1894',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 03:35:31 am',
        description: 'Payment from Tax - XXXXXX6207',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 02:45:44 am',
        description: 'Payment from Tax - XXXXXX4420',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 02:30:12 am',
        description: 'Payment from Tax - XXXXXX8315',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 02:15:08 am',
        description: 'Payment from Tax - XXXXXX7562',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 02:00:40 am',
        description: 'Payment from Tax - XXXXXX6493',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:45:03 am',
        description: 'Payment from Tax - XXXXXX5840',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:30:58 am',
        description: 'Payment from Tax - XXXXXX7608',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:15:15 am',
        description: 'Payment from Tax - XXXXXX9195',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:13:00 am',
        description: 'Payment from Tax - XXXXXX3246',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:08:27 am',
        description: 'Payment from Tax - XXXXXX1112',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:05:41 am',
        description: 'Payment from Tax - XXXXXX6064',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 19, 2025, 01:03:59 am',
        description: 'Payment from Tax - XXXXXX4473',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 08:00:00 am',
        description: 'Payment from Tax - XXXXXX1923',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 07:30:00 am',
        description: 'Payment from Tax - XXXXXX8475',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 07:00:00 am',
        description: 'Payment from Tax - XXXXXX6347',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 06:30:00 am',
        description: 'Payment from Tax - XXXXXX2381',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 06:00:00 am',
        description: 'Payment from Tax - XXXXXX5893',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 05:30:00 am',
        description: 'Payment from Tax - XXXXXX9147',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 05:00:00 am',
        description: 'Payment from Tax - XXXXXX3026',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 04:30:00 am',
        description: 'Payment from Tax - XXXXXX7104',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 04:00:00 am',
        description: 'Payment from Tax - XXXXXX4639',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 03:45:00 am',
        description: 'Payment from Tax - XXXXXX8812',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 03:30:00 am',
        description: 'Payment from Tax - XXXXXX3789',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 03:15:00 am',
        description: 'Payment from Tax - XXXXXX5320',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 03:10:00 am',
        description: 'Payment from Tax - XXXXXX7906',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 15, 2025, 03:00:00 am',
        description: 'Payment from Tax - XXXXXX3492',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 07:04:14 am',
        description: 'Payment from Tax - XXXXXX7346',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 07:00:00 am',
        description: 'Payment from Tax - XXXXXX9872',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 06:40:23 am',
        description: 'Payment from Tax - XXXXXX5847',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 06:30:00 am',
        description: 'Payment from Tax - XXXXXX4531',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 06:03:22 am',
        description: 'Payment from Tax - XXXXXX2105',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 05:45:00 am',
        description: 'Payment from Tax - XXXXXX1098',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 05:18:35 am',
        description: 'Payment from Tax - XXXXXX6634',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 14, 2025, 05:00:00 am',
        description: 'Payment from Tax - XXXXXX3217',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 15:58:55 pm',
        description: 'Payment from Tax - XXXXXX7346',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 15:49:18 pm',
        description: 'Payment from Tax - XXXXXX5847',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 15:37:10 pm',
        description: 'Payment from Tax - XXXXXX2105',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 15:22:46 pm',
        description: 'Payment from Tax - XXXXXX6634',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 15:07:33 pm',
        description: 'Payment from Tax - XXXXXX9890',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 14:58:09 pm',
        description: 'Payment from Tax - XXXXXX3459',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 14:41:21 pm',
        description: 'Payment from Tax - XXXXXX7724',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 14:29:54 pm',
        description: 'Payment from Tax - XXXXXX4562',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 14:17:45 pm',
        description: 'Payment from Tax - XXXXXX8391',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 13, 2025, 14:03:12 pm',
        description: 'Payment from Tax - XXXXXX1023',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 12, 2025, 17:01:47 pm',
        description: 'Payment from Tax - XXXXXX2438',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 12, 2025, 16:23:01 pm',
        description: 'Payment from Tax - XXXXXX1447',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 12, 2025, 15:30:11 pm',
        description: 'Payment from Tax - XXXXXX3464',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 12, 2025, 15:10:02 pm',
        description: 'Payment from Tax - XXXXXX2489',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 6, 2025, 15:30:18 pm',
        description: 'Payment from Tax - XXXXXX5487',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'May 6, 2025, 12:03:22 pm',
        description: 'Payment from Tax - XXXXXX3484',
        status: 'Success',
        amount_usd: 200000.0
      },
      {
        dateTime: 'May 6, 2025, 10:11:22 am',
        description: 'Payment from Tax - XXXXXX1384',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'May 7, 2025, 13:01:12 pm',
        description: 'Payment from Tax - XXXXXX9876',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'May 7, 2025, 11:26:35 am',
        description: 'Payment from Tax - XXXXXX4783',
        status: 'Success',
        amount_usd: 250000.0
      }
    ]
  },
  {
    account_id: 'ACC029',
    holder: {
      fullName: 'John smith',
      profileImgUrl: '',
      email: 'j*@gmail.com',
      dateCreated: '5/9/2025', // m/d/y
      username: 'Johnsmith25',
      password: 'smith1984'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $10,000. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 7, 2025',
        description: 'Transfer from Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'May 5, 2025',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'May 1, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 422000.0
      },
      {
        dateTime: 'April 28, 2025',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'April 20, 2025',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -98000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 194500.0
      },
      {
        dateTime: 'March 15, 2025',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -472350.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 102800.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -38000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'September 10, 2024',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 492300.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'July 7, 2024',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'March 3, 2024',
        description: 'Transfer from Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'December 18, 2023',
        description: 'Transfer to Elias Fischer - XXXXXX4520',
        status: 'Success',
        amount_usd: -49000.0
      },
      {
        dateTime: 'October 22, 2023',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 402500.0
      },
      {
        dateTime: 'August 9, 2023',
        description: 'Transfer to Emily Wagner - XXXXXX3814',
        status: 'Success',
        amount_usd: -325000.0
      },
      {
        dateTime: 'March 11, 2022',
        description: 'Transfer from Mia Brooks - XXXXXX5230',
        status: 'Success',
        amount_usd: 460000.0
      },
      {
        dateTime: 'June 20, 2021',
        description: 'Transfer to Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: -140000.0
      },
      {
        dateTime: 'November 30, 2019',
        description: 'Transfer from Ella Foster - XXXXXX6017',
        status: 'Success',
        amount_usd: 250.0
      },
      {
        dateTime: 'September 5, 2019',
        description: 'Transfer to Daniel Keller - XXXXXX8529',
        status: 'Success',
        amount_usd: -175000.0
      },
      {
        dateTime: 'June 1, 2019',
        description: 'Transfer from Ava Lewis - XXXXXX4112',
        status: 'Success',
        amount_usd: 388900.0
      },
      {
        dateTime: 'March 20, 2019',
        description: 'Transfer to Maxime Lefevre - XXXXXX0734',
        status: 'Success',
        amount_usd: -29500.0
      },
      {
        dateTime: 'December 12, 2018',
        description: 'Transfer from Oliver Hall - XXXXXX9001',
        status: 'Success',
        amount_usd: 485500.0
      },
      {
        dateTime: 'October 6, 2018',
        description: 'Transfer fee - XXXXXX2635',
        status: 'Success',
        amount_usd: -50.5
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer to Amelia Rossi - XXXXXX5288',
        status: 'Success',
        amount_usd: -67800.0
      },
      {
        dateTime: 'July 30, 2018',
        description: 'Transfer from Lucas White - XXXXXX7642',
        status: 'Success',
        amount_usd: 15200.0
      },
      {
        dateTime: 'June 12, 2018',
        description: 'VAT Fee - XXXXXX0733',
        status: 'Success',
        amount_usd: -100.75
      },
      {
        dateTime: 'May 3, 2018',
        description: 'Transfer to Sophia Schneider - XXXXXX9835',
        status: 'Success',
        amount_usd: -458000.0
      },
      {
        dateTime: 'February 10, 2018',
        description: 'Transfer from James Anderson - XXXXXX3377',
        status: 'Success',
        amount_usd: 238000.0
      }
    ]
  },
  {
    account_id: 'ACC030',
    holder: {
      fullName: 'Brad Rinehart',
      profileImgUrl: '',
      email: 'j*@gmail.com',
      dateCreated: '5/11/2025', // m/d/y
      username: 'Bradrinehart',
      password: 'Bradrinehart2025'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $500. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: []
  },
  {
    account_id: 'ACC031',
    holder: {
      fullName: 'Sharon Hawley',
      profileImgUrl: '',
      email: 's*@gmail.com',
      dateCreated: '5/20/2025', // m/d/y
      username: '@Hawley2121',
      password: 'CJNatRS21!'
    },
    bank_details: {
      account_type: 'Checking',
      isChecking: true,
      balance_usd: 500000000.0,
      saving_balance_usd: 500510000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $500. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 28, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5834',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'April 25, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7217',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'April 21, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1823',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'April 17, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX9461',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'April 11, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3197',
        status: 'Success',
        amount_usd: 3500.0
      },
      {
        dateTime: 'April 8, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7286',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4530',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 28, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX3604',
        status: 'Success',
        amount_usd: -8000.0
      },
      {
        dateTime: 'March 24, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1083',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'March 21, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX9472',
        status: 'Success',
        amount_usd: -2500.0
      },
      {
        dateTime: 'March 17, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5639',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'March 14, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7860',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4078',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'March 3, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1289',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX2365',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'February 24, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9021',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX7836',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'February 17, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6074',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX2154',
        status: 'Success',
        amount_usd: -6000.0
      },
      {
        dateTime: 'February 7, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6742',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'February 3, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5290',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'January 30, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX6473',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'January 27, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX8419',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'January 24, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX1184',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'January 22, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2950',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 20, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9093',
        status: 'Success',
        amount_usd: 7000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4562',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'January 13, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3670',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 6, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7734',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX6201',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'December 23, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX4872',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'December 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1349',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'December 16, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3595',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX7340',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'December 9, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2427',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'December 6, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX9185',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5001',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'November 30, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX3486',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7369',
        status: 'Success',
        amount_usd: 8000.0
      },
      {
        dateTime: 'November 20, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX6042',
        status: 'Success',
        amount_usd: -5000.0
      },
      {
        dateTime: 'November 16, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2764',
        status: 'Success',
        amount_usd: 6500.0
      },
      {
        dateTime: 'November 12, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX1807',
        status: 'Success',
        amount_usd: -4000.0
      },
      {
        dateTime: 'November 7, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6392',
        status: 'Success',
        amount_usd: 9000.0
      },
      {
        dateTime: 'November 3, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX8204',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'October 28, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX4825',
        status: 'Success',
        amount_usd: -8000.0
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX9317',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'October 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6154',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'October 18, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX8326',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX5470',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'October 10, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9058',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'September 25, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3429',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'September 20, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX7602',
        status: 'Success',
        amount_usd: -6000.0
      },
      {
        dateTime: 'September 10, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX4816',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'September 5, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX1937',
        status: 'Success',
        amount_usd: -7500.0
      },
      {
        dateTime: 'August 27, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX3581',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6743',
        status: 'Success',
        amount_usd: 500.0
      },
      {
        dateTime: 'August 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2380',
        status: 'Success',
        amount_usd: 6500.0
      },
      {
        dateTime: 'August 15, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX4895',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'August 10, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1742',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'August 7, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX6907',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'August 1, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX4718',
        status: 'Success',
        amount_usd: 6500.0
      },
      {
        dateTime: 'July 29, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX1840',
        status: 'Success',
        amount_usd: -5500.0
      },
      {
        dateTime: 'July 25, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX2481',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'July 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2930',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'July 17, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5917',
        status: 'Success',
        amount_usd: 9000.0
      },
      {
        dateTime: 'June 15, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX4362',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'May 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1134',
        status: 'Success',
        amount_usd: 7000.0
      },
      {
        dateTime: 'April 15, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX5043',
        status: 'Success',
        amount_usd: -5000.0
      },
      {
        dateTime: 'March 18, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX7239',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'February 8, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2857',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'January 5, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX9176',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'December 15, 2023',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6709',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'November 18, 2023',
        description: 'Transfer to Sharon Hawley - XXXXXX2873',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1024',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'September 3, 2023',
        description: 'Transfer to Sharon Hawley - XXXXXX8440',
        status: 'Success',
        amount_usd: -7500.0
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9936',
        status: 'Success',
        amount_usd: 6100.0
      },
      {
        dateTime: 'July 10, 2023',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX4652',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Transfer to Sharon Hawley - XXXXXX3042',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'May 13, 2023',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX8194',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'April 5, 2023',
        description: 'Transfer to Sharon Hawley - XXXXXX1876',
        status: 'Success',
        amount_usd: -2000.0
      }
    ]
  },
  {
    account_id: 'ACC032',
    holder: {
      fullName: 'Alex Thomas Jr',
      profileImgUrl: '',
      email: 'a*@gmail.com',
      dateCreated: '6/6/2025', // m/d/y
      username: 'Alexthomas44',
      password: 'Alexlovesharon'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2790000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 25, 2025',
        description: 'Transfer from Secretary of treasure United States - XXXXXX5834',
        status: 'Success',
        amount_usd: 1200000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer from Martins Luther - XXXXXX7217',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'February 22, 2025',
        description: 'Transfer from Orchid Investment ROI - XXXXXX1823',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'January 7, 2025',
        description: 'Transfer from Danny Williams - XXXXXX3864',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'December 26, 2024',
        description: 'Transfer from Secretary of tresure United States - XXXXXX4547',
        status: 'Success',
        amount_usd: 250000.0
      }
    ]
  },
  {
    account_id: 'ACC033',
    holder: {
      fullName: 'Pablito Arroyo Tamio',
      profileImgUrl: '',
      email: 'p*@gmail.com',
      dateCreated: '6/6/2025', // m/d/y
      username: 'Skinnybrown11',
      password: 'Nancy_pullah147'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 6400000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 18, 2024',
        description: 'Transfer from Goldmine Company Ltd - XXXXXX5834',
        status: 'Success',
        amount_usd: 640000.0
      },
      {
        dateTime: 'September 11, 2024',
        description: 'Transfer from Mensgold ltm - XXXXXX7217',
        status: 'Success',
        amount_usd: 238000.0
      },
      {
        dateTime: 'July 22, 2024',
        description: 'Transfer from Orchid Investment ROI - XXXXXX1823',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'May 7, 2024',
        description: 'Transfer from Danny Williams - XXXXXX3864',
        status: 'Success',
        amount_usd: -300000.0
      },
      {
        dateTime: 'April 26, 2024',
        description: 'Transfer from Secretary of tresure United States - XXXXXX4547',
        status: 'Success',
        amount_usd: -250000.0
      }
    ]
  },
  {
    account_id: 'ACC032',
    holder: {
      fullName: 'Christopher Bright',
      profileImgUrl: '',
      email: 'c*@gmail.com',
      dateCreated: '6/20/2025', // m/d/y
      username: 'ChristopherBright1982',
      password: 'Bella@1982'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 760870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 16, 2025',
        description: 'Transfer Payment from Eric Edward - XXXXXXX4312',
        status: 'Success',
        amount_usd: 24000.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Credit Card Payment officials - XXXXXXX9785',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5, 2024',
        description: 'Transfer from Tee~Energy services - XXXXXXX6240',
        status: 'Success',
        amount_usd: 117000.0
      },
      {
        dateTime: 'October 19, 2024',
        description: 'Credit Card Payment - XXXXXXX1109',
        status: 'Success',
        amount_usd: -11500.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'Check Deposit - XXXXXXX3017',
        status: 'Success',
        amount_usd: 140500.0
      },
      {
        dateTime: 'June 24, 2024',
        description: 'Transfer Payment from Steven Porter - XXXXXXX7562',
        status: 'Success',
        amount_usd: 21650.0
      },
      {
        dateTime: 'February 3, 2024',
        description: 'Credit Card Payment - XXXXXXX2246',
        status: 'Success',
        amount_usd: -15000.0
      },
      {
        dateTime: 'January 8, 2024',
        description: 'Transfer from Chad Estate management - XXXXXXX8371',
        status: 'Success',
        amount_usd: 37500.0
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Credit Card Payment - XXXXXXX6924',
        status: 'Success',
        amount_usd: -14500.0
      },
      {
        dateTime: 'March 23, 2023',
        description: 'CHECK DEPOSIT XXXXXX8324 - XXXXXXX1593',
        status: 'Success',
        amount_usd: 251000.0
      }
    ]
  },
  {
    account_id: 'ACC033',
    holder: {
      fullName: 'Charisma Elisa',
      profileImgUrl: '',
      email: 'c*@gmail.com',
      dateCreated: '6/22/2025', // m/d/y
      username: 'Charisma',
      password: 'Charisma123@'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 300870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 15, 2023',
        description: 'Transfer from Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'November 10, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 122000.0
      },
      {
        dateTime: 'October 20, 2023',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'October 1, 2023',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -28000.0
      },
      {
        dateTime: 'September 10, 2023',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 30, 2023',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 94500.0
      },
      {
        dateTime: 'July 15, 2023',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -72350.0
      },
      {
        dateTime: 'June 25, 2023',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 102800.0
      },
      {
        dateTime: 'June 1, 2023',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'May 10, 2023',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'April 25, 2023',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        dateTime: 'April 5, 2023',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'March 1, 2023',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'February 5, 2023',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 235000.0
      },
      {
        dateTime: 'December 1, 2022',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'November 2, 2022',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'October 5, 2022',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'August 10, 2022',
        description: 'Transfer from Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'June 15, 2022',
        description: 'Transfer to Elias Fischer - XXXXXX4520',
        status: 'Success',
        amount_usd: -49000.0
      },
      {
        dateTime: 'May 1, 2022',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 302500.0
      },
      {
        dateTime: 'March 3, 2022',
        description: 'Transfer to Emily Wagner - XXXXXX3814',
        status: 'Success',
        amount_usd: -175000.0
      },
      {
        dateTime: 'January 20, 2022',
        description: 'Transfer from Mia Brooks - XXXXXX5230',
        status: 'Success',
        amount_usd: 410000.0
      },
      {
        dateTime: 'December 1, 2021',
        description: 'Transfer to Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: -14000.0
      }
    ]
  },
  {
    account_id: 'ACC034',
    holder: {
      fullName: 'Lee Dong-Min',
      profileImgUrl: '',
      email: 'l*@gmail.com',
      dateCreated: '6/25/2025', // m/d/y
      username: 'leedongmin',
      password: 'SPIROSKY11'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1930000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 27, 2025',
        description: 'Transfer from Fantiago Astro - XXXXXX4647',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'June 26, 2025',
        description: 'Transfer from Fantiago Astro - XXXXXX9343',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'June 24, 2025',
        description: 'Transfer from Clara James - XXXXXX1029',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'May 18, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -54000.0
      },
      {
        dateTime: 'April 2, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 153000.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -60.5
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -32000.0
      },
      {
        dateTime: 'November 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'September 9, 2024',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -41000.0
      },
      {
        dateTime: 'June 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 95000.0
      },
      {
        dateTime: 'February 27, 2024',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -90.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 122000.0
      },
      {
        dateTime: 'October 3, 2023',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -28000.0
      },
      {
        dateTime: 'August 16, 2023',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 235000.0
      },
      {
        dateTime: 'March 5, 2023',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'November 22, 2022',
        description: 'Transfer to Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: -49000.0
      },
      {
        dateTime: 'July 30, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'March 1, 2022',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'October 15, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 302500.0
      },
      {
        dateTime: 'August 2, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'May 28, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'January 8, 2021',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'September 18, 2020',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 89000.0
      },
      {
        dateTime: 'June 1, 2020',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'February 12, 2020',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 27, 2019',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        dateTime: 'May 9, 2019',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'March 3, 2019',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 410000.0
      },
      {
        dateTime: 'December 8, 2018',
        description: 'Transfer from Ava Carter - XXXXXX2450',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer to Hugo Rivera - XXXXXX9888',
        status: 'Success',
        amount_usd: -64000.0
      },
      {
        dateTime: 'June 10, 2018',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 53000.0
      },
      {
        dateTime: 'February 1, 2018',
        description: 'VAT Fee - XXXXXX4521',
        status: 'Success',
        amount_usd: -120.0
      },
      {
        dateTime: 'October 22, 2017',
        description: 'Transfer to Olivia Moore - XXXXXX3366',
        status: 'Success',
        amount_usd: -30000.0
      },
      {
        dateTime: 'July 17, 2017',
        description: 'Transfer from Noah Bennett - XXXXXX1789',
        status: 'Success',
        amount_usd: 84000.0
      },
      {
        dateTime: 'April 3, 2017',
        description: 'Transfer fee - XXXXXX6612',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'December 20, 2016',
        description: 'Transfer from Fantagio Entertainment  Astro - XXXXXX1023',
        status: 'Success',
        amount_usd: 200000.0
      },
      {
        dateTime: 'December 8, 2016',
        description: 'Transfer from Fantagio Entertainment  Astro - XXXXXX4737',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        dateTime: 'October 2, 2016',
        description: 'Transfer to Benjamin Adams - XXXXXX2189',
        status: 'Success',
        amount_usd: -47000.0
      },
      {
        dateTime: 'March 12, 2016',
        description: 'Transfer from Sophia White - XXXXXX9311',
        status: 'Success',
        amount_usd: -92500.0
      }
    ]
  },
  {
    account_id: 'ACC035',
    holder: {
      fullName: 'Steve Jeffrey',
      profileImgUrl: '',
      email: 's*@gmail.com',
      dateCreated: '6/27/2025', // m/d/y
      username: 'Steve123',
      password: 'Steve0123'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 20500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 19, 2021',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'October 6, 2021',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'August 14, 2021',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'June 2, 2021',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'March 18, 2021',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'December 11, 2020',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 194000.0
      },
      {
        dateTime: 'October 4, 2020',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'July 28, 2020',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 102000.0
      },
      {
        dateTime: 'May 16, 2020',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'January 9, 2020',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'October 20, 2019',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'September 2, 2019',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 218000.0
      },
      {
        dateTime: 'June 15, 2019',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 27, 2019',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'December 5, 2018',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'September 30, 2018',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'July 12, 2018',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 319000.0
      },
      {
        dateTime: 'April 20, 2018',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'January 15, 2018',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'October 2, 2017',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -253000.0
      },
      {
        dateTime: 'August 22, 2017',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'May 8, 2017',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'February 10, 2017',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'October 9, 2016',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'June 21, 2015',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'March 8, 2014',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 421000.0
      },
      {
        dateTime: 'November 2, 2013',
        description: 'Transfer from Ava Carter - XXXXXX2450',
        status: 'Success',
        amount_usd: 48000.0
      },
      {
        dateTime: 'July 13, 2012',
        description: 'Transfer to Hugo Rivera - XXXXXX9888',
        status: 'Success',
        amount_usd: -63000.0
      },
      {
        dateTime: 'May 10, 2011',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 59000.0
      },
      {
        dateTime: 'December 12, 2010',
        description: 'Transfer from Sophia Green - XXXXXX1273',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'October 5, 2010',
        description: 'Transfer to Daniel Lee - XXXXXX6720',
        status: 'Success',
        amount_usd: -23500.0
      },
      {
        dateTime: 'August 21, 2010',
        description: 'Transfer from Thomas Kim - XXXXXX3580',
        status: 'Success',
        amount_usd: 112000.0
      },
      {
        dateTime: 'June 9, 2010',
        description: 'Transfer fee - XXXXXX2222',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'March 27, 2010',
        description: 'Transfer from Olivia Park - XXXXXX4301',
        status: 'Success',
        amount_usd: 58000.0
      },
      {
        dateTime: 'January 3, 2010',
        description: 'VAT Fee - XXXXXX8111',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'October 11, 2009',
        description: 'Transfer to William Harris - XXXXXX5598',
        status: 'Success',
        amount_usd: -19000.0
      },
      {
        dateTime: 'August 2, 2009',
        description: 'Transfer from Chloe Davis - XXXXXX2004',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'May 16, 2009',
        description: 'Transfer to Ethan Wilson - XXXXXX9435',
        status: 'Success',
        amount_usd: -46000.0
      },
      {
        dateTime: 'February 9, 2009',
        description: 'Transfer from Lucas Brown - XXXXXX3321',
        status: 'Success',
        amount_usd: 78000.0
      }
    ]
  },
  {
    account_id: 'ACC036',
    holder: {
      fullName: 'Michael Davis jones',
      profileImgUrl: '',
      email: 'm*@gmail.com',
      dateCreated: '7/6/2025', // m/d/y
      username: 'dadloveava',
      password: 'Michael2001'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 539000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 5, 2025',
        description: 'Wire transfer from Larkspur Holdings LLC – #LH712TX',
        status: 'Success',
        amount_usd: 98500.0
      },
      {
        dateTime: 'May 18, 2024',
        description: 'Wire transfer from Nortridge Financial – #NF847TX',
        status: 'Success',
        amount_usd: 92000.0
      },
      {
        dateTime: 'February 2, 2023',
        description: 'Refund from Deltan Group Corp – #DG634TX',
        status: 'Success',
        amount_usd: 75000.0
      },
      {
        dateTime: 'November 6, 2021',
        description: 'Wire transfer from Crestview Partners – #CP229TX',
        status: 'Success',
        amount_usd: 67000.0
      },
      {
        dateTime: 'August 14, 2019',
        description: 'Refund from Jamemar Corporation – #JM102TX',
        status: 'Success',
        amount_usd: 62500.0
      },
      {
        dateTime: 'June 10, 2018',
        description: 'Wire transfer from Triton Payments Inc – #TP457TX',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'March 20, 2017',
        description: 'Wire transfer from Enclave Group – #EG789TX',
        status: 'Success',
        amount_usd: 43000.0
      },
      {
        dateTime: 'September 8, 2016',
        description: 'Refund from Western Reimbursements – #WR336TX',
        status: 'Success',
        amount_usd: 27500.0
      },
      {
        dateTime: 'April 22, 2015',
        description: 'Wire transfer from Larkspur Holdings LLC, Q2 service reimbursement – #LS122TX',
        status: 'Success',
        amount_usd: 12375.0
      },
      {
        dateTime: 'March 6, 2015',
        description: 'Refund from Jamemar Corporation, check payment – #JM9450TX',
        status: 'Success',
        amount_usd: 9450.0
      }
    ]
  },
  {
    account_id: 'ACC037',
    holder: {
      fullName: 'John Benedict ',
      profileImgUrl: '',
      email: 'j*@gmail.com',
      dateCreated: '7/22/2025', // m/d/y
      username: 'Toolmann',
      password: 'Delight@me4u'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 800501.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 21, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'July 18, 2025',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'July 12, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'July 5, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 102000.0
      },
      {
        dateTime: 'June 18, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'June 11, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'June 3, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 194000.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'May 20, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'May 12, 2025',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'May 4, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 218000.0
      },
      {
        dateTime: 'April 15, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'April 8, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'March 27, 2025',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'March 19, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 319000.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'February 22, 2025',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -253000.0
      },
      {
        dateTime: 'February 14, 2025',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'February 6, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'January 16, 2025',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'January 8, 2025',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 421000.0
      },
      {
        dateTime: 'December 19, 2024',
        description: 'Transfer from Olivia Park - XXXXXX4301',
        status: 'Success',
        amount_usd: 58000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'VAT Fee - XXXXXX8111',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer to William Harris - XXXXXX5598',
        status: 'Success',
        amount_usd: -19000.0
      },
      {
        dateTime: 'November 21, 2024',
        description: 'Transfer from Chloe Davis - XXXXXX2004',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'November 13, 2024',
        description: 'Transfer to Ethan Wilson - XXXXXX9435',
        status: 'Success',
        amount_usd: -46000.0
      },
      {
        dateTime: 'November 4, 2024',
        description: 'Transfer from Lucas Brown - XXXXXX3321',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'October 24, 2024',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 59000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer from Sophia Green - XXXXXX1273',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'October 6, 2024',
        description: 'Transfer to Daniel Lee - XXXXXX6720',
        status: 'Success',
        amount_usd: -23500.0
      }
    ]
  },
  {
    account_id: 'ACC038',
    holder: {
      fullName: 'Jessie T Worthington',
      profileImgUrl: '',
      email: 't*@gmail.com',
      dateCreated: '7/26/2025', // m/d/y
      username: 'Jessie123',
      password: 'Remmydadday$#123'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 250125.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 24, 2024',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'July 12, 2024',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'July 5, 2024',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'June 25, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 102000.0
      },
      {
        dateTime: 'June 18, 2024',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'June 11, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'June 3, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 194000.0
      },
      {
        dateTime: 'May 28, 2024',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'May 20, 2024',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'May 4, 2024',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'April 22, 2024',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 218000.0
      },
      {
        dateTime: 'April 15, 2024',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'April 8, 2024',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'March 27, 2024',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'March 19, 2024',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 319000.0
      },
      {
        dateTime: 'March 10, 2024',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'March 2, 2024',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'February 22, 2024',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -253000.0
      },
      {
        dateTime: 'February 14, 2024',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'February 6, 2024',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'February 1, 2024',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'January 25, 2024',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'January 16, 2024',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'January 8, 2024',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 421000.0
      },
      {
        dateTime: 'December 19, 2023',
        description: 'Transfer from Olivia Park - XXXXXX4301',
        status: 'Success',
        amount_usd: 58000.0
      },
      {
        dateTime: 'December 10, 2023',
        description: 'VAT Fee - XXXXXX8111',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'December 2, 2023',
        description: 'Transfer to William Harris - XXXXXX5598',
        status: 'Success',
        amount_usd: -19000.0
      },
      {
        dateTime: 'November 21, 2023',
        description: 'Transfer from Chloe Davis - XXXXXX2004',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'November 13, 2023',
        description: 'Transfer to Ethan Wilson - XXXXXX9435',
        status: 'Success',
        amount_usd: -46000.0
      },
      {
        dateTime: 'November 4, 2023',
        description: 'Transfer from Lucas Brown - XXXXXX3321',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'October 24, 2023',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 59000.0
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Transfer from Sophia Green - XXXXXX1273',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'October 6, 2023',
        description: 'Transfer to Daniel Lee - XXXXXX6720',
        status: 'Success',
        amount_usd: -23500.0
      }
    ]
  },
  {
    account_id: 'ACC039',
    holder: {
      fullName: 'Hayley Pickford',
      profileImgUrl: '',
      email: 'h*@gmail.com',
      dateCreated: '7/27/2025', // m/d/y
      username: 'Hayley36',
      password: 'Pickford2@'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 24000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team on help@thebybit.co for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 26, 2025',
        description: 'Deposit from coinbase - XXXXXX1029',
        status: 'Success',
        amount_usd: 6100.0
      },
      {
        dateTime: 'July 26, 2025',
        description: 'Deposit from Bybit - XXXXXX2376',
        status: 'Success',
        amount_usd: 13000.0
      },
      {
        dateTime: 'July 26, 2025',
        description: 'Deposit from Bybit - XXXXXX7354',
        status: 'Success',
        amount_usd: 2500.0
      }
    ]
  },
  {
    account_id: 'ACC040',
    holder: {
      fullName: 'Amelia Melissa Jerome',
      profileImgUrl: '',
      email: 'a*@gmail.com',
      dateCreated: '7/29/2025', // m/d/y
      username: 'ALEX217',
      password: 'SPYFIXED1233$'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      isChecking: true,
      balance_usd: 1357099.0,
      saving_balance_usd: 200000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'June 19, 2025',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'June 13, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 102000.0
      },
      {
        dateTime: 'May 21, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 194000.0
      },
      {
        dateTime: 'April 30, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'April 6, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 218000.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 319000.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -253000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'January 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      }
    ]
  },
  {
    account_id: 'ACC041',
    holder: {
      fullName: 'Serenity Lomas',
      mobileNumber: '+12185082322',
      email: 'beatrice**@gmail.com',
      dateCreated: '7/30/2025', // m/d/y
      username: 'Serenity890',
      password: 'Serenitylloyd'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 7057000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 17, 2022',
        description: 'Transfer from Edward Jona Lopez - XXXXXX2326',
        status: 'Success',
        amount_usd: 1500000.0
      },
      {
        dateTime: 'June 17, 2022',
        description: 'Transfer from Edward Jona Lopez - XXXXXX6533',
        status: 'Success',
        amount_usd: 1450000.0
      },
      {
        dateTime: 'June 17, 2022',
        description: 'Transfer from Edward Jona Lopez - XXXXXX3377',
        status: 'Success',
        amount_usd: 1400000.0
      },
      {
        dateTime: 'June 17, 2022',
        description: 'Transfer from Edward Jona Lopez - XXXXXX3564',
        status: 'Success',
        amount_usd: 1350000.0
      },
      {
        dateTime: 'June 17, 2022',
        description: 'Transfer from Edward Jona Lopez - XXXXXX3469',
        status: 'Success',
        amount_usd: 1357000.0
      }
    ]
  },
  {
    account_id: 'ACC042',
    holder: {
      fullName: 'Fernandez Jose de Pablo',
      email: 'f*@gmail.com',
      dateCreated: '7/30/2025', // m/d/y
      username: 'Maria_25',
      password: 'FernJoPa@99'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1850000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '1212',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 26, 2025',
        description: 'Transfer from VistaNest Properties - XXXXXX2347',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'July 25, 2025',
        description: 'Transfer from Summit Housing Grp. - XXXXXX4499',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'July 20, 2025',
        description: 'VAT Fee - XXXXXX4673',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'July 15, 2025',
        description: 'Transfer from chase - XXXXXX3644',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'July 12, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'July 5, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'June 19, 2025',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'June 13, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 102000.0
      },
      {
        dateTime: 'May 21, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 194000.0
      },
      {
        dateTime: 'April 30, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'April 6, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 218000.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 319000.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -253000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'January 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'December 21, 2024',
        description: 'Transfer from Gerald William Almond XXXXXX1187',
        status: 'Success',
        amount_usd: 6500.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Transfer from NovaTech Solutions XXXXXX3874',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'December 9, 2024',
        description: 'Transfer to Bright Future Ltd XXXXXX1112',
        status: 'Success',
        amount_usd: -7200.0
      },
      {
        dateTime: 'December 3, 2024',
        description: 'Transfer from Quantum Dynamics XXXXXX7632',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        dateTime: 'November 26, 2024',
        description: 'Transfer to Stellar Enterprises XXXXXX7834',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        dateTime: 'November 14, 2024',
        description: 'Transfer from Apex Corp XXXXXX4567',
        status: 'Success',
        amount_usd: 22500.0
      }
    ]
  },
  {
    account_id: 'ACC043',
    holder: {
      fullName: 'Reena Htoo',
      email: 'r*@gmail.com',
      dateCreated: '8/11/2025', // m/d/y
      username: 'Reena2025',
      password: 'Htoo2025'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      isLedger: true,
      balance_usd: 0.0,
      ledger_balance_usd: 80000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '1212',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 11, 2025',
        description: 'Transfer from annual GRANT AID BY DOWC - XXXXXX2347',
        status: 'Success',
        amount_usd: 80000.0
      }
    ]
  },
  {
    account_id: 'ACC044',
    holder: {
      fullName: 'Alex Chris Earl',
      email: 'alexear*@gmail.com',
      dateCreated: '8/12/2025', // m/d/y
      username: 'alexearl552',
      password: 'Vodafone1#'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1256024.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '1212',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 13, 2025',
        description: 'Transfer from payroll - XXXXXX2347',
        status: 'Success',
        amount_usd: 4267.0
      },
      {
        dateTime: 'August 7, 2025',
        description: 'Transfer from Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: 52000.0
      },
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'June 19, 2025',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'June 13, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'May 21, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'April 30, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'April 6, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -25300.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'January 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'December 25, 2024',
        description: 'Transfer from Global Fund - XXXXXX2856',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'November 26, 2024',
        description: 'Transfer from Nova Relief Trust - XXXXXX4863',
        status: 'Success',
        amount_usd: 820000.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'Transfer from Tesla - XXXXXX1384',
        status: 'Success',
        amount_usd: 46000.0
      },
      {
        dateTime: 'November 22, 2024',
        description: 'VAT Fee - XXXXXX5632',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from Nova Relief Trust - XXXXXX7489',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 25, 2024',
        description: 'Transfer to Maria Lopez - XXXXXX3951',
        status: 'Success',
        amount_usd: -18450.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from Unity Grants - XXXXXX6297',
        status: 'Success',
        amount_usd: 19700.0
      },
      {
        dateTime: 'July 25, 2024',
        description: 'Vat Fee - XXXXXX8712',
        status: 'Success',
        amount_usd: -125.0
      },
      {
        dateTime: 'June 25, 2024',
        description: 'Transfer from David Kim - XXXXXX4208',
        status: 'Success',
        amount_usd: 16800.0
      },
      {
        dateTime: 'May 25, 2024',
        description: 'Transfer from HopeBridge Network - XXXXXX1764',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'April 25, 2024',
        description: 'Vat Fee - XXXXXX9583',
        status: 'Success',
        amount_usd: -103.0
      },
      {
        dateTime: 'March 25, 2024',
        description: 'Transfer from FutureReach Initiative - XXXXXX6125',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        dateTime: 'February 25, 2024',
        description: 'Transfer from NewWorld Grants - XXXXXX8347',
        status: 'Success',
        amount_usd: 14300.0
      },
      {
        dateTime: 'January 25, 2024',
        description: 'Transfer to AidSphere Group - XXXXXX1092',
        status: 'Success',
        amount_usd: -12500.0
      }
    ]
  },
  {
    account_id: 'ACC045',
    holder: {
      fullName: 'Eugene Neuliep L.',
      email: 'eu*@gmail.com',
      dateCreated: '8/14/2025', // m/d/y
      username: 'Geno43',
      password: 'Alliyahgeno'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 850502.12
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 13, 2025',
        description: 'Transfer from payroll - XXXXXX2347',
        status: 'Success',
        amount_usd: 4267.0
      },
      {
        dateTime: 'August 7, 2025',
        description: 'Transfer from Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: 52000.0
      },
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'June 19, 2025',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'June 13, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'May 21, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -3700.0
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 1940.0
      },
      {
        dateTime: 'April 30, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -3900.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 12900.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'April 6, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -2600.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 2180.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -25300.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'January 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'December 25, 2024',
        description: 'Transfer from Global Fund - XXXXXX2856',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'November 26, 2024',
        description: 'Transfer from Nova Relief Trust - XXXXXX4863',
        status: 'Success',
        amount_usd: 820000.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'Transfer from Tesla - XXXXXX1384',
        status: 'Success',
        amount_usd: 46000.0
      },
      {
        dateTime: 'November 22, 2024',
        description: 'VAT Fee - XXXXXX5632',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from Nova Relief Trust - XXXXXX7489',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 25, 2024',
        description: 'Transfer to Maria Lopez - XXXXXX3951',
        status: 'Success',
        amount_usd: -18450.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from Unity Grants - XXXXXX6297',
        status: 'Success',
        amount_usd: 19700.0
      },
      {
        dateTime: 'July 25, 2024',
        description: 'Vat Fee - XXXXXX8712',
        status: 'Success',
        amount_usd: -125.0
      },
      {
        dateTime: 'June 25, 2024',
        description: 'Transfer from David Kim - XXXXXX4208',
        status: 'Success',
        amount_usd: 16800.0
      },
      {
        dateTime: 'May 25, 2024',
        description: 'Transfer from HopeBridge Network - XXXXXX1764',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'April 25, 2024',
        description: 'Vat Fee - XXXXXX9583',
        status: 'Success',
        amount_usd: -103.0
      },
      {
        dateTime: 'March 25, 2024',
        description: 'Transfer from FutureReach Initiative - XXXXXX6125',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        dateTime: 'February 25, 2024',
        description: 'Transfer from NewWorld Grants - XXXXXX8347',
        status: 'Success',
        amount_usd: 14300.0
      },
      {
        dateTime: 'January 25, 2024',
        description: 'Transfer to AidSphere Group - XXXXXX1092',
        status: 'Success',
        amount_usd: -12500.0
      }
    ]
  },
  {
    account_id: 'ACC046',
    holder: {
      fullName: 'Mark Jones',
      email: 'm*@gmail.com',
      dateCreated: '8/15/2025', // m/d/y
      username: 'markjones89',
      password: 'SHANEP1890'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 70000000480.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 23, 2023',
        description: 'Transfer from Bright Future - XXXXXX2347',
        status: 'Success',
        amount_usd: 30000000000.0
      },
      {
        dateTime: 'July 23, 2023',
        description: 'vat fee',
        status: 'Success',
        amount_usd: -40.0
      },
      {
        dateTime: 'July 8, 2023',
        description: 'Transfer from Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: 10000000000.0
      },
      {
        dateTime: 'July 8, 2023',
        description: 'vat fee',
        status: 'Success',
        amount_usd: -40.0
      },
      {
        dateTime: 'June 26, 2023',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 10000000000.0
      },
      {
        dateTime: 'June 26, 2023',
        description: 'vat fee',
        status: 'Success',
        amount_usd: -40.0
      },
      {
        dateTime: 'June 14, 2023',
        description: 'Transfer from Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: 10000000000.0
      },
      {
        dateTime: 'June 14, 2023',
        description: 'vat fee',
        status: 'Success',
        amount_usd: -40.0
      },
      {
        dateTime: 'June 7, 2023',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 10000000000.0
      }
    ]
  },
  {
    account_id: 'ACC047',
    holder: {
      fullName: 'Robert A Jameson',
      email: 'r*@gmail.com',
      dateCreated: '8/15/2025', // m/d/y
      username: 'JamRob21',
      password: 'KylieRob'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 120000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 13, 2020',
        description: 'Transfer from payroll - XXXXXX2347',
        status: 'Success',
        amount_usd: 87000.0
      },
      {
        dateTime: 'August 7, 2020',
        description: 'Transfer from Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: 35200.0
      },
      {
        dateTime: 'July 18, 2020',
        description: 'Transfer to Olivia Bennett - XXXXXX8373',
        status: 'Success',
        amount_usd: -35000.0
      },
      {
        dateTime: 'June 25, 2020',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 85000.0
      },
      {
        dateTime: 'June 19, 2020',
        description: 'Transfer from Mason Carter - XXXXXX4499',
        status: 'Success',
        amount_usd: 75450.0
      },
      {
        dateTime: 'June 13, 2020',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 63000.0
      },
      {
        dateTime: 'May 28, 2020',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 52700.0
      },
      {
        dateTime: 'May 14, 2020',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -3700.0
      },
      {
        dateTime: 'May 6, 2020',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 21040.0
      },
      {
        dateTime: 'April 30, 2020',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -3900.0
      },
      {
        dateTime: 'April 22, 2019',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 29000.0
      },
      {
        dateTime: 'April 14, 2019',
        description: 'Transfer from Benjamin Foster - XXXXXX4110',
        status: 'Success',
        amount_usd: 27100.0
      },
      {
        dateTime: 'April 6, 2019',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'March 25, 2019',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 82180.0
      },
      {
        dateTime: 'March 18, 2019',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      }
    ]
  },
  {
    account_id: 'ACC048',
    holder: {
      fullName: 'Carol Young',
      email: 'c*@gmail.com',
      dateCreated: '8/23/2025', // m/d/y
      username: 'carol21',
      password: 'ODAmilare21@'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 2000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 23, 2025',
        description: 'Transfer from Phillip Lim',
        status: 'Success',
        amount_usd: 125000.0
      },
      {
        dateTime: 'August 18, 2025',
        description: 'Transfer to Jones Rodriguez',
        status: 'Success',
        amount_usd: -4267.0
      },
      {
        dateTime: 'August 13, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 85000.0
      },
      {
        dateTime: 'August 7, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 52000.0
      },
      {
        dateTime: 'June 25, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 1940.0
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 12900.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 2180.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'December 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'November 26, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 82000.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 46000.0
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'August 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 19700.0
      },
      {
        dateTime: 'June 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 16800.0
      },
      {
        dateTime: 'May 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'March 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        dateTime: 'February 25, 2024',
        description: 'Transfer from Jones Rodriguez',
        status: 'Success',
        amount_usd: 14300.0
      }
    ]
  },
  {
    account_id: 'ACC049',
    holder: {
      fullName: 'Amita Holmes',
      email: 'a*@gmail.com',
      dateCreated: '8/25/2025', // m/d/y
      username: 'HolmesDemery',
      password: 'Holmes11'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 3200000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 12, 2008',
        description: 'Tractor and 2 Trucks - XXXXXX1763',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'November 24, 2008',
        description: 'Housing estate at Meadow Park Ln SW, Atlanta, GA - XXXXXX0876',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 10, 2008',
        description: 'Acres of land at Elim Church Road, Hinesville - XXXXXX2347',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'August 22, 2008',
        description: 'Transfer Fee - XXXXXX4779',
        status: 'Success',
        amount_usd: -162.5
      },
      {
        dateTime: 'August 22, 2008',
        description: 'Transfer to Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: -52000.0
      },
      {
        dateTime: 'November 14, 2007',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'December 16, 2006',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'December 16, 2006',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'November 18, 2006',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'October 20, 2006',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'December 1, 2005',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'November 3, 2005',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'October 5, 2005',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'December 9, 2004',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'November 1, 2004',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'October 6, 2004',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      },
      {
        dateTime: 'December 12, 2003',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'November 15, 2003',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'October 10, 2003',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 20, 2002',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'November 8, 2002',
        description: 'Transfer fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -105.2
      },
      {
        dateTime: 'October 2, 2002',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'December 1, 2001',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 6, 2001',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 116000.0
      },
      {
        dateTime: 'October 11, 2001',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -25300.0
      },
      {
        dateTime: 'December 7, 2000',
        description: 'Transfer from Charlotte Green - XXXXXX4552',
        status: 'Success',
        amount_usd: 96000.0
      },
      {
        dateTime: 'November 9, 2000',
        description: 'Transfer fee - XXXXXX7812',
        status: 'Success',
        amount_usd: -52.0
      },
      {
        dateTime: 'November 9, 2000',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -11800.0
      },
      {
        dateTime: 'October 2, 1999',
        description: 'Transfer fee - XXXXXX3001',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'October 2, 1999',
        description: 'Transfer to Lena Schmidt - XXXXXX5571',
        status: 'Success',
        amount_usd: -22200.0
      },
      {
        dateTime: 'December 5, 1998',
        description: 'Transfer from Anthony Fox - XXXXXX9921',
        status: 'Success',
        amount_usd: 19800.0
      },
      {
        dateTime: 'November 1, 1998',
        description: 'Transfer to Clara Lee - XXXXXX4428',
        status: 'Success',
        amount_usd: -14000.0
      },
      {
        dateTime: 'October 6, 1998',
        description: 'Transfer fee - XXXXXX3008',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'December 18, 1997',
        description: 'Transfer from Samuel Brown - XXXXXX3740',
        status: 'Success',
        amount_usd: 28750.0
      },
      {
        dateTime: 'November 9, 1997',
        description: 'Transfer fee - XXXXXX9011',
        status: 'Success',
        amount_usd: -98.5
      },
      {
        dateTime: 'November 9, 1997',
        description: 'Transfer to Henry Bell - XXXXXX6659',
        status: 'Success',
        amount_usd: -32000.0
      },
      {
        dateTime: 'December 15, 1996',
        description: 'Transfer from Anna Moore - XXXXXX1937',
        status: 'Success',
        amount_usd: 11500.0
      },
      {
        dateTime: 'November 12, 1996',
        description: 'Transfer to Lucas White - XXXXXX3874',
        status: 'Success',
        amount_usd: -8700.0
      },
      {
        dateTime: 'October 7, 1996',
        description: 'Transfer fee - XXXXXX4211',
        status: 'Success',
        amount_usd: -61.0
      },
      {
        dateTime: 'December 6, 1995',
        description: 'Transfer from Olivia Kim - XXXXXX6338',
        status: 'Success',
        amount_usd: 13200.0
      },
      {
        dateTime: 'November 8, 1995',
        description: 'Transfer to William Lee - XXXXXX8120',
        status: 'Success',
        amount_usd: -16900.0
      },
      {
        dateTime: 'October 5, 1995',
        description: 'Fee - XXXXXX2199',
        status: 'Success',
        amount_usd: -79.0
      },
      {
        dateTime: 'December 10, 1994',
        description: 'Transfer from Hannah Stone - XXXXXX5200',
        status: 'Success',
        amount_usd: 8900.0
      },
      {
        dateTime: 'November 4, 1994',
        description: 'Transfer fee - XXXXXX8702',
        status: 'Success',
        amount_usd: -68.0
      },
      {
        dateTime: 'November 4, 1994',
        description: 'Transfer to Ethan Brooks - XXXXXX9904',
        status: 'Success',
        amount_usd: -14500.0
      },
      {
        dateTime: 'December 7, 1993',
        description: 'Transfer from Julia Davis - XXXXXX7321',
        status: 'Success',
        amount_usd: 21400.0
      },
      {
        dateTime: 'November 2, 1993',
        description: 'Transfer fee - XXXXXX4889',
        status: 'Success',
        amount_usd: -91.0
      },
      {
        dateTime: 'November 2, 1993',
        description: 'Transfer to Marcus Green - XXXXXX6050',
        status: 'Success',
        amount_usd: -11000.0
      },
      {
        dateTime: 'December 3, 1992',
        description: 'Transfer from Natalie Hughes - XXXXXX3417',
        status: 'Success',
        amount_usd: 16700.0
      },
      {
        dateTime: 'October 5, 1992',
        description: 'Transfer fee - XXXXXX1104',
        status: 'Success',
        amount_usd: -84.0
      },
      {
        dateTime: 'October 5, 1992',
        description: 'Transfer to Owen Baker - XXXXXX7891',
        status: 'Success',
        amount_usd: -12300.0
      }
    ]
  },
  {
    account_id: 'ACC050',
    holder: {
      fullName: 'Sharon Louise Smits',
      email: 's*@gmail.com',
      dateCreated: '8/27/2025', // m/d/y
      username: 'Sharonsmits',
      password: 'Sharonlovealex4life'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 2600000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 27, 2025',
        description: 'Transfer from treasury department - XXXXXX0876',
        status: 'Success',
        amount_usd: 1100000.0
      },
      {
        dateTime: 'August 26, 2025',
        description: 'Transfer from Alex Thomas - XXXXXX1763',
        status: 'Success',
        amount_usd: 1500000.0
      },
      {
        dateTime: 'May 27, 2025',
        description: 'Debit by Sharon Louise Smits: #DebitMasterCard - XXXXXX3560',
        status: 'Success',
        amount_usd: -100000.0
      }
    ]
  },
  {
    account_id: 'ACC051',
    holder: {
      fullName: 'Smith morris',
      email: 's*@gmail.com',
      dateCreated: '8/29/2025', // m/d/y
      username: 'Smith0098',
      password: 'Grandkids248'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 650000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 5, 2019',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'October 20, 2019',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'July 11, 2019',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 11, 2019',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },

      {
        dateTime: 'December 2, 2018',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },

      {
        dateTime: 'November 30, 2017',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2017',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2017',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2017',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },

      {
        dateTime: 'December 7, 2016',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2016',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2016',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2016',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },

      {
        dateTime: 'December 18, 2015',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2015',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2015',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2015',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },

      {
        dateTime: 'November 23, 2014',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2014',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2014',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2014',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },

      {
        dateTime: 'December 8, 2013',
        description: 'Transfer from Olivia Park - XXXXXX4301',
        status: 'Success',
        amount_usd: 58000.0
      },
      {
        dateTime: 'September 18, 2013',
        description: 'Transfer from Chloe Davis - XXXXXX2004',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'July 12, 2013',
        description: 'Transfer fee - XXXXXX9435',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 12, 2013',
        description: 'Transfer to Ethan Wilson - XXXXXX9435',
        status: 'Success',
        amount_usd: -46000.0
      },

      {
        dateTime: 'November 13, 2012',
        description: 'Transfer from Lucas Brown - XXXXXX3321',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'September 25, 2012',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 59000.0
      },
      {
        dateTime: 'June 11, 2012',
        description: 'Transfer fee - XXXXXX6720',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2012',
        description: 'Transfer to Daniel Lee - XXXXXX6720',
        status: 'Success',
        amount_usd: -23500.0
      }
    ]
  },
  {
    account_id: 'ACC052',
    holder: {
      fullName: 'Donna Mary',
      email: 'd*@gmail.com',
      dateCreated: '9/2/2025', // m/d/y
      username: 'Donnamary1380',
      password: 'Debo1380'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 130000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'December 7, 2022',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC053',
    holder: {
      fullName: 'Kate manthey Oliver',
      email: 'Kate**01@gmail.com',
      dateCreated: '9/5/2025', // m/d/y
      username: "katemanthey123",
      password: "kate123$$",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer fee - XXXXXX3826',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer fee - XXXXXX2543',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer from Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
    ]
  },
  {
    account_id: 'ACC054',
    holder: {
      fullName: 'Steve Jack',
      email: 's**@gmail.com',
      dateCreated: '9/7/2025', // m/d/y
      username: "Steve1010",
      password: "Jack9035",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 3502300.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 6, 2025',
        description: 'Transfer from Chloe Anderson - XXXXXX1029',
        status: 'Success',
        amount_usd: 127500.0
      },
      {
        dateTime: 'September 3, 2025',
        description: 'Transfer from Noah Collins - XXXXXX1029',
        status: 'Success',
        amount_usd: 53500.0
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer to Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
       {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer fee - XXXXXX2543',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer from Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
    ]
  },
  {
    account_id: 'ACC055',
    holder: {
      fullName: 'Valorie Martinez',
      email: 'redh**v@gmail.com',
      dateCreated: '9/13/2025', // m/d/y
      username: "Valorie511",
      password: "Ringo$Angel23",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 12, 2025',
        description: 'Bitcoin - XXXXXX1029',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 10, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 7, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'September 3, 2025',
        description: 'Bicoin - XXXXXX1029',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer to Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
       {
        dateTime: 'December 2, 2024',
        description: 'Bitcoin - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Michael Smith - XXXXXX3674',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer fee - XXXXXX2543',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer from Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX3846',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC056',
    holder: {
      fullName: 'Jacqueline London',
      email: 'j**@gmail.com',
      dateCreated: '9/13/2025', // m/d/y
      username: "jacquelondon35",
      password: "Loveisbeautiful634",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1840000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 12, 2025',
        description: 'House sold - 221B Baker Street',
        status: 'Success',
        amount_usd: 285000.0
      },
      {
        dateTime: 'September 10, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 7, 2025',
         description: 'Monthly house rent - 45 Sunset Blvd',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'September 3, 2025',
        description: 'Rent payment received - Apt 14C',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Real estate agent fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'House down payment - Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Rental income - 88 Lakeview Drive',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Property tax payment - Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Commission from real estate closing - XXXXXX6111',
        status: 'Success',
        amount_usd: 100200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Michael Smith - XXXXXX3674',
        status: 'Success',
        amount_usd: 29400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Rental deposit refunded - Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Real estate inspection fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Rent received - Unit 304, Maple Apartments',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Rental income - Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Rent payment - Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'House sold proceeds - Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Maintenance fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Rental payment to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Rent received from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'House sold to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Real estate agent bonus - Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'House sale income - Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX3846',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Rent transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC057',
    holder: {
      fullName: 'John Smith',
      email: 'j**@gmail.com',
      dateCreated: '9/14/2025', // m/d/y
      username: "jsmith9935",
      password: "Ablegod1",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 30, 2024',
        description: 'House sold - 221B Baker Street',
        status: 'Success',
        amount_usd: 285000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'December 7, 2024',
         description: 'Monthly house rent - 45 Sunset Blvd',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'December 3, 2024',
        description: 'Rent payment received - Apt 14C',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'August 30, 2024',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'August 12, 2024',
        description: 'Real estate agent fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2024',
        description: 'House down payment - Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 20, 2024',
        description: 'Rental income - 88 Lakeview Drive',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2024',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2024',
        description: 'Property tax payment - Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'February 11, 2024',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2024',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2023',
        description: 'Commission from real estate closing - XXXXXX6111',
        status: 'Success',
        amount_usd: 100200.0
      },
      {
        dateTime: 'September 15, 2023',
        description: 'Transfer from Michael Smith - XXXXXX3674',
        status: 'Success',
        amount_usd: 29400.0
      },
      {
        dateTime: 'July 18, 2023',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2023',
        description: 'Rental deposit refunded - Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'June 12, 2023',
        description: 'Real estate inspection fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Rent received - Unit 304, Maple Apartments',
        status: 'Success',
        amount_usd: 2880.0
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Rental income - Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'April 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'April 5, 2023',
        description: 'Rent payment - Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'March 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'February 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 2, 2023',
        description: 'House sold proceeds - Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'December 18, 2022',
        description: 'Maintenance fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 18, 2022',
        description: 'Rental payment to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Rent received from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'August 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 4, 2022',
        description: 'House sold to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'House sold to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'June 18, 2022',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'May 9, 2022',
        description: 'Real estate agent bonus - Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'April 1, 2022',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 20, 2022',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'February 18, 2022',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'February 4, 2022',
        description: 'House sale income - Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'January 27, 2022',
        description: 'Transfer fee - XXXXXX3846',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'January 27, 2022',
        description: 'Rent transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC058',
    holder: {
      fullName: 'Brent Drake & Emily Alejandro Drake',
      email: 'bdem**@gmail.com',
      dateCreated: '9/24/2025', // m/d/y
      username: "Brent&Emilydrake",
      password: "Together4life",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 200000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'This account is not currently enabled for external transfers. A one‑time activation fee of $3,000.00 is required to activate this service. Once the fee is successfully paid, transfers will be enabled because activation charge is required to proceed.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 12, 2020',
        description: 'Tractor and 2 Trucks - XXXXXX1763',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'November 24, 2020',
        description: 'Housing estate at Meadow Park Ln SW, Atlanta, GA - XXXXXX0876',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 10, 2020',
        description: 'Acres of land at Elim Church Road, Hinesville - XXXXXX2347',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'August 22, 2019',
        description: 'Transfer Fee - XXXXXX4779',
        status: 'Success',
        amount_usd: -162.5
      },
      {
        dateTime: 'August 22, 2019',
        description: 'Transfer to Citybank - XXXXXX3456',
        status: 'Success',
        amount_usd: -52000.0
      },
      {
        dateTime: 'November 14, 2018',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        dateTime: 'December 16, 2017',
        description: 'Transfer fee - XXXXXX4499',
        status: 'Success',
        amount_usd: -92.0
      },
      {
        dateTime: 'December 16, 2017',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'November 18, 2017',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'October 20, 2017',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'December 1, 2016',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'November 3, 2016',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'October 5, 2016',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'December 9, 2015',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'November 1, 2015',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'October 6, 2015',
        description: 'Transfer fee - XXXXXX4110',
        status: 'Success',
        amount_usd: -88.0
      }
    ]
  },
  {
    account_id: 'ACC059',
    holder: {
      fullName: 'Schragg Michael',
      email: 'msch**@yahoo.com',
      dateCreated: '9/28/2025', // m/d/y
      username: "MichaelBailey2025",
      password: "Ilovemywife",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 28, 2025',
        description: 'Transfer from Liam Brooks - XXXXXX9001',
        status: 'Success',
        amount_usd: 41500.0
      },
      {
        dateTime: 'September 20, 2025',
        description: 'Transfer fee - XXXXXX5668',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 20, 2025',
        description: 'Transfer to Daniel Craig - XXXXXX4507',
        status: 'Success',
        amount_usd: -5800.0
      },
      {
        dateTime: 'September 13, 2025',
        description: 'Transfer from Summit Corp - XXXXXX6725',
        status: 'Success',
        amount_usd: 1000.0
      },
      {
        dateTime: 'September 6, 2025',
        description: 'Transfer fee - XXXXXX1384',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 6, 2025',
        description: 'Transfer to Helen Motors - XXXXXX6633',
        status: 'Success',
        amount_usd: -5500.0
      },
      {
        dateTime: 'September 3, 2025',
        description: 'Transfer from Noah Collins - XXXXXX8464',
        status: 'Success',
        amount_usd: 53500.0
      },
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Grace Mitchell - XXXXXX1029',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer to Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
       {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 12, 2023',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer fee - XXXXXX2543',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2023',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2023',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2022',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2022',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2022',
        description: 'Transfer from Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
    ]
  }
];
