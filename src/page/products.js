import React from 'react'

export default function Products() {
    return (
        <div>
            <div class="container mt-3">
                <h2 align="center">Basic Table</h2>
                <p align="center">The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>
                <table class="table">
                    <thead align="center">
                        <tr>
                            <th>Products ID</th>
                            <th>Products Name</th>
                            <th>Products Price</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        <tr>
                            <td>001</td>
                            <td>T-Shirt</td>
                            <td>300 $</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Jeans</td>
                            <td>200 $</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Sweater</td>
                            <td>500 $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
