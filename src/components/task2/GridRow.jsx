import { memo } from "react";

function GridRow({name, price}) {
    return (
        <li>
            {`Назва товару: ${name} - вартість: ${price}`}
        </li>
    );
}

export default memo(GridRow);