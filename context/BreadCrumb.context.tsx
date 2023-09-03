'use client'
import React, { createContext, useContext, useReducer } from 'react';

type BreadcrumbItem = {
    label: string;
    url: string;
  };
  
  // Tipe untuk state breadcrumb
  type BreadcrumbState = BreadcrumbItem | null;
  
  // Aksi untuk reducer
  type BreadcrumbAction =
    | { type: 'SET_BREADCRUMB'; payload: BreadcrumbItem }
    | { type: 'CLEAR_BREADCRUMB' };
  
  // Inisialisasi state awal breadcrumb
  const initialState: BreadcrumbState = {
    label:"Dashboard",
    url:""
  };
  
  // Buat konteks breadcrumb
  const BreadcrumbContext = createContext<{
    state: BreadcrumbState;
    dispatch: React.Dispatch<BreadcrumbAction>;
  } | undefined>(undefined);
  
  // Reducer untuk mengelola breadcrumb state
  const breadcrumbReducer = (state: BreadcrumbState, action: BreadcrumbAction): BreadcrumbState => {
    switch (action.type) {
      case 'SET_BREADCRUMB':
        return action.payload;
      case 'CLEAR_BREADCRUMB':
        return null;
      default:
        return state;
    }
  };
  
  // Komponen penyedia konteks breadcrumb
  export const BreadcrumbProvider = ({ children }) => {
    const [state, dispatch] = useReducer(breadcrumbReducer, initialState);
  
    return (
      <BreadcrumbContext.Provider value={{ state, dispatch }}>
        {children}
      </BreadcrumbContext.Provider>
    );
  };
  
  // Hook untuk mengakses state dan dispatch breadcrumb
  export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext);
    if (context === undefined) {
      throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
    }
    return context;
  };
  
  
  
  
  
  