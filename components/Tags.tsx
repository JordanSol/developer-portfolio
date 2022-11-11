import React, {FC} from 'react'

type TagsProps = {
    text: string;
}

const Tags: FC<TagsProps> = ({text}) => {
    return (
        <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
            <span>
                {`<${text}>`}
            </span>
            <div className="border-r grow min-h-6" />
            <span>
                {`</${text}>`}
            </span>
        </div>
    )
}

export default Tags