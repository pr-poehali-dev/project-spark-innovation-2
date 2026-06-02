export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-[#0d0d0d]">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2" style={{boxShadow: '-4px 0 30px rgba(255,26,26,0.15)'}}>
        <img
          src="https://cdn.poehali.dev/projects/c46659b3-b3a5-4969-995e-06035aba3757/files/c6ffd46b-2859-4d21-a06d-93d428a6fc07.jpg"
          alt="VapeLink premium collection"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest neon-red">Почему выбирают VapeLink</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight">
          Только сертифицированная продукция от ведущих мировых брендов. Премиум устройства, богатая палитра вкусов и профессиональная консультация — всё в одном месте.
        </p>
        <button className="neon-btn-white px-6 py-3 text-sm cursor-pointer w-fit uppercase tracking-widest">
          Перейти в каталог
        </button>
      </div>
    </div>
  );
}