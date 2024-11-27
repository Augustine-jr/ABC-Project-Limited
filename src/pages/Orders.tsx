import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { OrderStatus } from '../types';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import  Button  from '../components/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/Select';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogOverlay } from '@radix-ui/react-dialog';


// Type guard for status filter
const isValidOrderStatus = (status: string): status is OrderStatus | 'ALL' => {
  return status === 'ALL' || 
         Object.values(OrderStatus).includes(status as OrderStatus);
};


const OrdersPage: React.FC = () => {
  const { orders, cancelOrder, clearCancelledOrders } = useContext(OrderContext);
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'ALL'>('ALL');
  const [isDialogOpen, setDialogOpen] = useState(false); // Track dialog state

  // Enhanced status filter with type safety
  const handleStatusFilterChange = (value: string) => {
    if (isValidOrderStatus(value)) {
      setStatusFilter(value);
      toast.info(`Filtered orders: ${value}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const filteredOrders = statusFilter === 'ALL' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

      const hasCancelledOrders = orders.some(order => order.status === OrderStatus.CANCELLED);

      // Status icon mapping
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.AWAITING_CONFIRMATION:
        return <Clock className="text-yellow-600" />;
      case OrderStatus.CONFIRMED:
        return <CheckCircle className="text-green-600" />;
      case OrderStatus.CANCELLED:
        return <XCircle className="text-red-600" />;
    }
  };


     // Handle clearing cancelled orders
  const handleClearCancelledOrders = () => {
    setDialogOpen(true); // Open the dialog to confirm
  };

  const confirmClearCancelledOrders = () => {
    clearCancelledOrders();
    setDialogOpen(false); // Close the dialog
  };

    const cancelClearCancelledOrders = () => {
    setDialogOpen(false); // Close the dialog
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Orders</h1>
        <div className="flex items-center space-x-4">
          <Select 
            value={statusFilter} 
            onValueChange={handleStatusFilterChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Orders</SelectItem>
              <SelectItem value={OrderStatus.AWAITING_CONFIRMATION}>Awaiting Confirmation</SelectItem>
              <SelectItem value={OrderStatus.CONFIRMED}>Confirmed</SelectItem>
              <SelectItem value={OrderStatus.CANCELLED}>Canceled</SelectItem>
            </SelectContent>
          </Select>
           {hasCancelledOrders && (
            <Button 
              variant="destructive" 
              size="sm"
             onClick={handleClearCancelledOrders}
            >
              Clear Cancelled Orders
            </Button>
          )}
          <Button onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <div 
              key={order.id} 
              className={`
                border rounded-lg p-4 
                ${order.status === OrderStatus.CANCELLED 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-white border-gray-200'
                }
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Order #{order.id.slice(-8)}</h2>
                <span 
                  className={`
                    px-3 py-1 rounded-full text-sm
                    ${order.status === OrderStatus.AWAITING_CONFIRMATION 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : order.status === OrderStatus.CONFIRMED
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                    }
                  `}
                >
                  {order.status}
                </span>
              </div>

              <div className="space-y-2">
                <p>Name: {order.customerDetails.name}</p>
                <p>Phone: {order.customerDetails.phone}</p>
                <p>Address: {order.customerDetails.address}</p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <p className="font-bold">Total: ₦{order.totalPrice}</p>
                {order.status !== OrderStatus.CANCELLED && (
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => cancelOrder(order.id)}
                  >
                    Cancel Order
                  </Button>
                )}
              </div>

              {order.status === OrderStatus.CANCELLED && order.canceledReason && (
                <div className="mt-2 text-sm text-red-600">
                  Cancellation Reason: {order.canceledReason}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
       {/* Dialog Component for Confirmation with Blur Effect */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="p-6 sm:max-w-md max-w-full bg-white rounded-lg">
          <DialogTitle>Clear Cancelled Orders</DialogTitle>
          <DialogDescription>Are you sure you want to clear all cancelled orders?</DialogDescription>

          <div className="mt-4 flex justify-between">
            <DialogClose asChild>
              <button className="bg-red-500 text-white p-2 rounded" onClick={cancelClearCancelledOrders}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button className="bg-green-500 text-white p-2 rounded" onClick={confirmClearCancelledOrders}>
                Confirm
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
       

export default OrdersPage;