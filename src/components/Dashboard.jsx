import { motion } from "framer-motion";
import {
  CameraIcon,
  ImageIcon,
  CheckCircle2Icon,
  ClockIcon,
  GlobeIcon,
} from "lucide-react";

const stats = [
  {
    title: "Photos Uploaded",
    icon: <CameraIcon className="w-6 h-6 text-white" />,
    value: 124,
    color: "bg-sky-600",
  },
  {
    title: "Whale Matches Found",
    icon: <CheckCircle2Icon className="w-6 h-6 text-white" />,
    value: 97,
    color: "bg-emerald-600",
  },
  {
    title: "Under Review",
    icon: <ClockIcon className="w-6 h-6 text-white" />,
    value: 14,
    color: "bg-amber-500",
  },
  {
    title: "WatchWhale Detections",
    icon: <ImageIcon className="w-6 h-6 text-white" />,
    value: 32,
    color: "bg-indigo-600",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">Welcome Back, Ocean Explorer!</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Here’s a snapshot of your recent activity on WatchWhale.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 rounded-2xl shadow-md bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-full ${stat.color} shadow-md`}>
                {stat.icon}
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
