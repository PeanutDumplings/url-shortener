import { motion } from "framer-motion";
import { Input } from "./ui/input";

function URLInput() {
  const handleSubmit = () => {};

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      className="relative mx-auto my-12 md:w-1/2"
    >
      <Input placeholder="Enter your url" onSubmit={handleSubmit}></Input>
    </motion.article>
  );
}
