import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg:
      "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'James wachtmeister',
    lastName: 'Egan',
    email: 'j***@gmail.com',
    username: 'James.egan231',
    password: 'civilnature231',
    transactionCode: '7894',
    createdAt: '2026-6-28', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '160418980387',
        balance: 148650.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Groceries & Misc - Walmart',
            category: '****1482',
            date: 'Apr 15, 2026',
            amount: -214.55,
            status: 'success'
          },
          {
            merchant: 'Rent Payment',
            category: '****8314',
            date: 'Apr 05, 2026',
            amount: -2650.0,
            status: 'success'
          },
          {
            merchant: 'Deposit/ref/54892600',
            category: '****2953',
            date: 'Apr 01, 2026',
            amount: 35000.0,
            status: 'success'
          },
          {
            merchant: 'Company Reimbursement - Laptop',
            category: '****6104',
            date: 'Mar 22, 2026',
            amount: 1900.0,
            status: 'success'
          },
          {
            merchant: 'Apple Laptop Purchase',
            category: '****4739',
            date: 'Mar 18, 2026',
            amount: -1899.0,
            status: 'success'
          },
          {
            merchant: 'Rent Payment',
            category: '****5028',
            date: 'Mar 05, 2026',
            amount: -2650.0,
            status: 'success'
          },
          {
            merchant: 'Deposit/ref/54892600',
            category: '****3187',
            date: 'Mar 01, 2026',
            amount: 110000.0,
            status: 'success'
          },
          {
            merchant: 'Valentine Dinner',
            category: '****7461',
            date: 'Feb 14, 2026',
            amount: -92.3,
            status: 'success'
          },
          {
            merchant: 'Rent Payment',
            category: '****1942',
            date: 'Feb 05, 2026',
            amount: -2650.0,
            status: 'success'
          },
          {
            merchant: 'Deposit/ref/54892600',
            category: '****8835',
            date: 'Feb 01, 2026',
            amount: 675000.0,
            status: 'success'
          },
          {
            merchant: 'Utilities (Power + Gas)',
            category: '****3659',
            date: 'Jan 10, 2026',
            amount: -198.45,
            status: 'success'
          },
          {
            merchant: 'Rent Payment',
            category: '****4210',
            date: 'Jan 05, 2026',
            amount: -2650.0,
            status: 'success'
          },
          {
            merchant: 'Deposit/ref/54892600',
            category: '****9074',
            date: 'Jan 01, 2026',
            amount: 130000.0,
            status: 'success'
          },
          {
            merchant: 'Year-End Bonus - TechCorp',
            category: '****5523',
            date: 'Dec 24, 2025',
            amount: 195000.0,
            status: 'success'
          },
          {
            merchant: 'Holiday Shopping - Best Buy',
            category: '****1398',
            date: 'Dec 15, 2025',
            amount: -289.99,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 1050000.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'Henry E',
    lastName: 'Willis',
    email: 'h***@gmail.com',
    username: 'Henrywillis990',
    password: '9876321',
    transactionCode: '7894',
    createdAt: '2026-9-25', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '160418980387',
        balance: 1000000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Deposit from bank~ACH Transfer',
            category: '****1482',
            date: 'Sept 24, 2026',
            amount: 250000.0,
            status: 'success'
          },
          {
            merchant: 'Tesla Energy~solar subscription',
            category: '****5921',
            date: 'Sept 13, 2026',
            amount: -2000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sarah Jenkins~Venmo split',
            category: '****3840',
            date: 'Sept 02, 2026',
            amount: 30000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from David Miller~Zelle payment',
            category: '****9104',
            date: 'Aug 18, 2026',
            amount: 40000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Emily Watson~Inheritance disbursement',
            category: '****2271',
            date: 'July 29, 2026',
            amount: 50000.0,
            status: 'success'
          },
          {
            merchant: 'Estate of Evelyn Vance~Inheritance disbursement',
            category: '****6539',
            date: 'July 05, 2026',
            amount: 200000.0,
            status: 'success'
          },
          {
            merchant: 'Deposit from bank~Wire Transfer',
            category: '****1482',
            date: 'June 22, 2026',
            amount: 150000.0,
            status: 'success'
          },
          {
            merchant: 'Tesla Supercharging~EV charging station',
            category: '****4412',
            date: 'June 04, 2026',
            amount: -8000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Marcus Aurelius~rent split',
            category: '****7835',
            date: 'May 15, 2026',
            amount: -10000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Jessica Taylor~loan repayment',
            category: '****3190',
            date: 'May 01, 2026',
            amount: 80000.0,
            status: 'success'
          },
          {
            merchant: 'Tesla Service Center~tire replacement',
            category: '****8246',
            date: 'Apr 14, 2026',
            amount: -15000.0,
            status: 'success'
          },
          {
            merchant: 'Deposit from bank~ACH Transfer',
            category: '****1482',
            date: 'Apr 02, 2026',
            amount: 100000.0,
            status: 'success'
          },
          {
            merchant: 'Tesla Finance~monthly vehicle payment',
            category: '****5563',
            date: 'Mar 18, 2026',
            amount: -40000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Robert Chen~dinner split',
            category: '****0947',
            date: 'Mar 03, 2026',
            amount: 100000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 1050000.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0004',
    firstName: 'Rico Osborne',
    lastName: 'Allen',
    email: 'rico***@gmail.com',
    username: 'Ricoosborne09',
    password: 'Catherine09',
    transactionCode: '7894',
    createdAt: '2026-10-17', // y-m-d
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '160418980387',
        balance: 1681849.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Salary Deposit',
            category: '****2824',
            date: 'Apr 3, 2026',
            amount: 291000.0,
            status: 'success'
          },
          {
            merchant: 'Company Reimbursement - Laptop',
            category: '****1409',
            date: 'Mar 22, 2026',
            amount: 1899.0,
            status: 'success'
          },
          {
            merchant: 'Apple Laptop Purchase',
            category: '****5506',
            date: 'Mar 18, 2026',
            amount: -1899.0,
            status: 'success'
          },
          {
            merchant: 'Valentine Dinner',
            category: '****5012',
            date: 'Feb 14, 2026',
            amount: -140.3,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit',
            category: '****4657',
            date: 'Feb 1, 2026',
            amount: 300750.0,
            status: 'success'
          },
          {
            merchant: 'Holiday Shopping - Best Buy',
            category: '****3286',
            date: 'Dec 15, 2025',
            amount: -289.99,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit',
            category: '****2679',
            date: 'Dec 1, 2025',
            amount: 140000.0,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit',
            category: '****9935',
            date: 'Nov 1, 2025',
            amount: 214750.0,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit',
            category: '****2424',
            date: 'Oct 1, 2025',
            amount: 250000.0,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit',
            category: '****7912',
            date: 'Sep 1, 2025',
            amount: 150750.0,
            status: 'success'
          },
          {
            merchant: 'Delta Flight to NYC',
            category: '****1520',
            date: 'Aug 18, 2025',
            amount: -428.5,
            status: 'success'
          },
          {
            merchant: 'Q2 Performance Bonus - TechCorp',
            category: '****1488',
            date: 'Jul 20, 2025',
            amount: 40200.0,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit - TechCorp Inc.',
            category: '****2535',
            date: 'Jul 1, 2025',
            amount: 89750.0,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit - TechCorp Inc.',
            category: '****4582',
            date: 'Jun 1, 2025',
            amount: 100750.0,
            status: 'success'
          },
          {
            merchant: 'Dining - Thai Palace Restaurant',
            category: '****4811',
            date: 'May 18, 2025',
            amount: -65.4,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit - TechCorp Inc.',
            category: '****9279',
            date: 'May 1, 2025',
            amount: 77000.0,
            status: 'success'
          },
          {
            merchant: 'Gym Membership - Fitness First',
            category: '****1434',
            date: 'Apr 25, 2025',
            amount: -49.0,
            status: 'success'
          },
          {
            merchant: 'Groceries - Whole Foods Market',
            category: '****4257',
            date: 'Jan 10, 2025',
            amount: -187.45,
            status: 'success'
          },
          {
            merchant: 'Salary Deposit - TechCorp Inc.',
            category: '****9928',
            date: 'Aug 2, 2024',
            amount: 14750.0,
            status: 'success'
          },
          {
            merchant: 'Opening Balance',
            category: '****7873',
            date: 'Aug 1, 2024',
            amount: 10250.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
