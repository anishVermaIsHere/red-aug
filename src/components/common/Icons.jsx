import { ArrowRight, ArrowLeft, NotebookPen, CircleCheck, CircleX, AlignRight, X } from 'lucide-react';

export const Icons = {
    arrowRight: (props)=><ArrowRight {...props}/>,
    arrowLeft: (props)=><ArrowLeft {...props}/>,
    noteBookPen: (props)=><NotebookPen {...props}/>,
    circleCheck: (props)=><CircleCheck {...props}/>,
    circleCancel: (props)=><CircleX {...props}/>,
    hambgMenu: (props)=><AlignRight {...props}/>,
    cancel: (props)=><X {...props}/>
}