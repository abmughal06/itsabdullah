import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DynamicAlertDialog({ child, dialogTitle }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{child}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between pb-3">
            <h3 className="text-xl text-primary font-semibold pt-2">
              {dialogTitle}
            </h3>
            <AlertDialogCancel className="border-none">X</AlertDialogCancel>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
