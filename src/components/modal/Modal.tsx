import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from "@mui/material";
import { ModalProps } from "./modal.types";

const Modal = (props: ModalProps) => {
  const theme = useTheme();
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: props.maxWidth ? props.maxWidth : "lg",
            minHeight: props.height ? props.height : "70%",
            width: props.width ? props.width : "40%",
            borderRadius: "20px",
          },
        }}
      >
        <Box bgcolor={theme.palette.primary.main} height="15px" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.225rem",
            // marginTop: "0.5rem",
          }}
        >
          <Box>
            <DialogTitle
              sx={{
                m: 0,
                paddingLeft: "10px",
                fontSize: theme.typography.h4,
                fontWeight: 600,
              }}
            >
              {props.title}
            </DialogTitle>
          </Box>
          <Box>
            {props.handleClose && (
              <IconButton
                aria-label="close"
                onClick={props.handleClose}
                sx={{
                  // position: "absolute",
                  // right: 8,
                  // top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </Box>
        <DialogContent sx={{ padding: "0px 16px" }}>
          <>{props.children}</>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
