'use client'
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
queryClient.defaultQueryOptions({
    refetchOnWindowFocus: false
});
const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}
export default ReactQueryClientProvider