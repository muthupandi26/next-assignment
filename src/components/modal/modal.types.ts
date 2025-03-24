export type ModalProps = {
  open: boolean;
  handleClose?: () => void;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  height?: string | number;
  width?: string | number;
  title?: string;
  children: React.ReactNode;
};
