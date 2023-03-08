import { IuguGetAccountResponse, IuguConfirmAccountResponse, IuguUpdateAccountResponse } from "../@types/iugu"
import useFetch from "./useFetch";

type useFetchIuguReturn = {
  getAllAccounts: (accountId:string) => Promise<IuguGetAccountResponse>;
  confirmAccount: (accountTokens:{}) => Promise<IuguConfirmAccountResponse>;
  updateAccount: (accountTokens:{}) => Promise<IuguUpdateAccountResponse>;
}

const useFetchIugu = () => {

  const { request } = useFetch()

  const getAllAccounts = async (localMainApiToken:string):Promise<IuguGetAccountResponse> => {
    try {
      const response:IuguGetAccountResponse  = await request<IuguGetAccountResponse>(`https://api.iugu.com/v1/retrieve_subaccounts_api_token?api_token=${localMainApiToken}`)
      return response
    } catch (error) {
      throw error
    }
  }

  const confirmAccount = async (accountTokens:{}):Promise<IuguConfirmAccountResponse> => {
    try {
      const response:IuguConfirmAccountResponse  = await request<IuguConfirmAccountResponse>('')
      return response
    } catch (error) {
      throw error
    }
  }

  const updateAccount = async (accountTokens:{}):Promise<IuguUpdateAccountResponse> => {
    try {
      const response:IuguUpdateAccountResponse  = await request<IuguUpdateAccountResponse>('')
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    getAllAccounts,
    confirmAccount,
    updateAccount
  } as useFetchIuguReturn
}

export default useFetchIugu