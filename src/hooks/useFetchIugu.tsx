import { IuguGetAccountResponse, IuguConfirmAccountResponse, IuguUpdateAccountResponse } from "../@types/iugu"
import useFetch from "./useFetch";

type useFetchIuguReturn = {
  getAccount: (accountId:string) => Promise<IuguGetAccountResponse>;
  confirmAccount: (accountId:string) => Promise<IuguConfirmAccountResponse>;
  updateAccount: (accountId:string) => Promise<IuguUpdateAccountResponse>;
}

const useFetchIugu = () => {

  const { request } = useFetch()

  const getAccount = async (accountId:string):Promise<IuguGetAccountResponse> => {
    try {
      const response:IuguGetAccountResponse  = await request<IuguGetAccountResponse>('')
      return response
    } catch (error) {
      throw error
    }
  }

  const confirmAccount = async (accountId:string):Promise<IuguConfirmAccountResponse> => {
    try {
      const response:IuguConfirmAccountResponse  = await request<IuguConfirmAccountResponse>('')
      return response
    } catch (error) {
      throw error
    }
  }

  const updateAccount = async (accountId:string):Promise<IuguUpdateAccountResponse> => {
    try {
      const response:IuguUpdateAccountResponse  = await request<IuguUpdateAccountResponse>('')
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    getAccount,
    confirmAccount,
    updateAccount
  } as useFetchIuguReturn
}

export default useFetchIugu