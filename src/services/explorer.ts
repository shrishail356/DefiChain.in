import axios, { AxiosResponse } from 'axios';

export interface Transaction_count{
  result: number;
}

export interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

export const getTransactionCount = async (address: string): Promise<number> => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getTransactionCount&contractaddress=0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A&address=${address}&tag=latest&apikey=ZZ71P8RMSUS9FVS4KQIIX4F2YXR79B2D25`);
    const hexTransactionCount = response.data.result;
    const parsedCount = parseInt(hexTransactionCount, 16);
    console.log("Count" , parsedCount)

    if (isNaN(parsedCount)) {
      console.error('Invalid transaction count:', hexTransactionCount);
      throw new Error('Invalid transaction count');
    }

    return parsedCount;
  } catch (error) {
    console.error('Error fetching transaction count:', error);
    throw error;
  }
};


export const getEtheriumCount = async (address: string): Promise<number> => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A&address=${address}&tag=latest&apikey=PVVAAKSTQ8FIDBMY5EWSVJPSHBCYHKDG2D`);
    const weiEtheriumCount = response.data.result;
    const wei = parseFloat(weiEtheriumCount);
    const ether = wei * 1e-8;
    

    if (isNaN(ether)) {
      console.error('Invalid Ethereum count:', weiEtheriumCount);
      throw new Error('Invalid Ethereum count');
    }

    return ether;
  } catch (error) {
    console.error('Error fetching Ethereum count:', error);
    throw error;
  }
};


export const getTransactionList = async (address: string): Promise<Transaction[]> => {
  const apiUrl = `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=PEND9SJQPG3HH8NWP7I6YMQ1IC7I8ZTTMZ`; 

  try {
    const response: AxiosResponse = await axios.get(apiUrl);
    if (response.status === 200) {
      const data = response.data;
      const transactions: Transaction[] = data.result.map((transaction: any) => ({
        blockNumber: transaction.blockNumber,
        timeStamp: transaction.timeStamp,
        hash: transaction.hash,
        nonce: transaction.nonce,
        blockHash: transaction.blockHash,
        transactionIndex: transaction.transactionIndex,
        from: transaction.from,
        to: transaction.to,
        value: transaction.value,
        gas: transaction.gas,
        gasPrice: transaction.gasPrice,
        isError: transaction.isError,
        txreceipt_status: transaction.txreceipt_status,
        input: transaction.input,
        contractAddress: transaction.contractAddress,
        cumulativeGasUsed: transaction.cumulativeGasUsed,
        gasUsed: transaction.gasUsed,
        confirmations: transaction.confirmations,
        methodId: transaction.methodId,
        functionName: transaction.functionName,
      }));

      return transactions;
    } else {
      console.error('Error occurred while retrieving transactions.');
      return [];
    }
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    return [];
  }
};
