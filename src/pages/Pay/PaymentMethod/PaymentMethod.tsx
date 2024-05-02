export default function PaymentMethod(props: any) {
  let paymentComponent;
  switch (props.paymentMethodId) {
    case 1:
      paymentComponent = <>Internet banking</>;
      break;
    case 2:
      paymentComponent = <>Momo payment</>;
      break;
    case 3:
      paymentComponent = <>Credit card</>;
      break;
    case 4:
      paymentComponent = <>Pay by cash</>;
      break;
  }
  return paymentComponent;
}
