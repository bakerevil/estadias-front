import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopupEditL = ({ onClose, mutate, landing }) => {
    const [formData, setFormData] = useState({
        slugs: landing.slugs,
        logo: landing.logo,
        hero: landing.hero,
        services: landing.services,
        packages: landing.packages,
        company_id: landing.company_id,
    });

    useEffect(() => {
        setFormData({
            slugs: landing.slugs,
            logo: landing.logo,
            hero: landing.hero,
            services: landing.services,
            packages: landing.packages,
            company_id: landing.company_id,
        });
    }, [landing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const editar = {
                "hero": `{"background": ${background}, "title": ${titulo}, "paragraph": ${parrafo}, "buttonText": ${botonTexto}, "buttonLink": ${botonEnlace}}`,
                "services": `{"background": ${background}, "title": ${titulo}, "paragraph": ${parrafo}, "buttonText": ${botonTexto}, "buttonLink": ${botonEnlace}}`,
                "package": `{"background": ${background}, "title": ${titulo}, "paragraph": ${parrafo}, "buttonText": ${botonTexto}, "buttonLink": ${botonEnlace}}`
            }
            await axios.put(`http://localhost:8000/landings/${landing.id}`, formData);
            mutate();
            onClose();
        } catch (error) {
            console.error('Error al editar el landing:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Editar Landing</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Slugs</label>
                        <input
                            type="text"
                            name="slugs"
                            value={formData.slugs}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Logo</label>
                        <input
                            type="text"
                            name="logo"
                            value={formData.logo}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Hero</label>
                        <input
                            type="text"
                            name="hero"
                            value={formData.hero}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Services</label>
                        <input
                            type="text"
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Packages</label>
                        <input
                            type="text"
                            name="packages"
                            value={formData.packages}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Company ID</label>
                        <input
                            type="text"
                            name="company_id"
                            value={formData.company_id}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 py-2 px-4 bg-gray-500 text-white rounded-md"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-600 text-white rounded-md"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupEditL;