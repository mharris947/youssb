import { TransactionStatus } from '@/types/userTypes';
import { ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react'; // Added Clock icon

interface TransactionItemProps {
  id?: string;
  merchant: string;
  category: string;
  date: string;
  amount: number;
  status: TransactionStatus;
  onClick?: () => void;
}

const statusConfig: Record<
  TransactionStatus,
  {
    label: string;
    color: string;
    amountColor: string;
  }
> = {
  success: {
    label: 'Success',
    color: 'bg-[#1fad53]/10 text-[#1fad53]',
    amountColor: 'text-[#1fad53]' // Green for success CREDITS
  },
  pending: {
    label: 'Pending',
    color: 'bg-amber-500/10 text-amber-500',
    amountColor: 'text-amber-500' // amber for pending
  },
  failed: {
    label: 'Failed',
    color: 'bg-[#ef4343]/10 text-[#ef4343]',
    amountColor: 'text-[#ef4343]' // Red for failed
  },
  canceled: {
    label: 'Canceled',
    color: 'bg-muted text-gray-500',
    amountColor: 'text-gray-500' // Gray for canceled
  },
  processing: {
    label: 'Processing',
    color: 'bg-warning/10 text-warning',
    amountColor: 'text-warning' // Warning color
  }
};

const TransactionItem = ({
  merchant,
  category,
  date,
  amount,
  status,
  onClick
}: TransactionItemProps) => {
  const isCredit = amount >= 0;
  const statusInfo = statusConfig[status];

  // Determine icon based on status first, then credit/debit directional flow
  const isPendingState = status === 'pending' || status === 'processing';
  const Icon = isPendingState ? Clock : isCredit ? ArrowDownLeft : ArrowUpRight;

  // Set icon colors dynamically: Blue/Warning colors for pending/processing states, otherwise standard green/red
  const iconBg = isPendingState
    ? statusInfo.color
    : isCredit
      ? 'bg-[#1fad53]/10 text-[#1fad53]'
      : 'bg-[#ef4343]/10 text-[#ef4343]';

  const formatCurrency = (value: number) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Math.abs(value));
    return value >= 0 ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div
      onClick={onClick}
      className="flex gap-3 py-3 border-b border-gray-200/50 last:border-0 hover:bg-[#0c2074]/30 -mx-2 px-2 rounded-lg transition-colors cursor-pointer"
    >
      <div className={`p-2.5 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-foreground">{merchant}</p>
        </div>
        <p className="text-xs text-gray-500">
          {category} • {date}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p
          className={`font-semibold text-sm text-balance ${isCredit ? 'text-[#1fad53]' : 'text-foreground'}`}
        >
          {formatCurrency(amount)}
        </p>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusInfo.color}`}>
          {statusInfo.label}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem;
