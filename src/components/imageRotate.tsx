import jsonPartners from '../../public/data/partners.json'

interface IProps{
    speed: string
}

export default function ImageRotate({speed}: IProps) {
    return (
        <div className="relative w-2/3 overflow-hidden h-40 pt-16 mb-10">
            <div className="absolute flex">
                 {/* @ts-ignore */}
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {jsonPartners.items.map(({ id, path }) => (
                    <div className="image" key={id}>
                        <img className="image" src={path} alt={path} />
                    </div>
                    ))}
                </section>
                 {/* @ts-ignore */}
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {jsonPartners.items.map(({ id, path }) => (
                    <div className="image" key={id}>
                        <img className="image" src={path} alt={path} />
                    </div>
                    ))}
                </section>
                 {/* @ts-ignore */}
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {jsonPartners.items.map(({ id, path }) => (
                    <div className="image" key={id}>
                        <img className="image" src={path} alt={path} />
                    </div>
                    ))}
                </section>
            </div>
        </div>

    )
} 