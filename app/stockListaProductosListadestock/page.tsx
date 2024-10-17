// pages/stock-y-productos.js
import React, { useEffect, useState } from "react";

const StockYProductos = () => {
    const [productos, setProductos] = useState([]);
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener los productos y stock
    const fetchData = async () => {
        try {
            const productosResponse = await fetch("/api/mitienda/misproductos");
            const stockResponse = await fetch("/api/mitienda/mistock");

            if (!productosResponse.ok || !stockResponse.ok) {
                throw new Error("Error en la respuesta del servidor");
            }

            const productosData = await productosResponse.json();
            const stockData = await stockResponse.json();

            // Comprobar si los datos contienen "final_result"
            setProductos(productosData.final_result || []);
            setStock(stockData.final_result || []);
            setLoading(false);
        } catch (err) {
            console.error("Error al obtener los datos:", err);
            setLoading(false);
        }
    };

    // Llamar a fetchData cuando se monta el componente
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <tr key={producto.id_producto}>
                                <td>{producto.titulo}</td>
                                <td>{producto.desc}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>No hay productos disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h1>Stock</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.length > 0 ? (
                        stock.map((item) => (
                            <tr key={item.id_producto}>
                                <td>{item.titulo}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.desc}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No hay stock disponible</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StockYProductos;
