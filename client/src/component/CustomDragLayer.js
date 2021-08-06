import { useDragLayer } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { ItemDragPreview } from '../component/ItemDragPreview'
import arrow from '../img/arrow.png'

const layerStyles = {
    position:"absolute",
    pointerEvents:"none",
    zIndex:100,
    top:0,
    left:0,
    // right:0,
    width:'50px'
}

function getItemStyles(initialOffset, currentOffset, pointer){
    
    if(!pointer) return null;
    let { x, y } = pointer;
    x -= 25;
    y -= 45;
    // x -= initialOffset.x;
    // y -= initialOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return{
        transform
    }
}

export const CustomDragLayer = (props) =>{
    const { itemType, isDragging, item, initialOffset, currentOffset, pointer } = useDragLayer((monitor) => ({
        item:monitor.getItem(),
        itemType:monitor.getItemType(),
        pointer:monitor.getClientOffset(),
        initialOffset:monitor.getInitialSourceClientOffset(),
        currentOffset:monitor.getSourceClientOffset(),
        isDragging:monitor.isDragging()
    }));


    function renderItem(pointer, initialOffset){
        let rot = 0;
        if (pointer){
            rot = Math.atan2(pointer.y - initialOffset.y, pointer.x - initialOffset.x)*(180/Math.PI) || null
        }
        return <ItemDragPreview rotation={rot} />;
        // return(<div>{item.id}</div>)
    }

    if (!isDragging) {
      return null;
    }

    return (
        <div style={layerStyles}>
            {/* <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div> */}
            <div style={getItemStyles(initialOffset, currentOffset, pointer)}>{renderItem(pointer, initialOffset)}</div>
        </div>
    )
}