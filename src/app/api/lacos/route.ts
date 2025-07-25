import { NextResponse } from "next/server";
import pool from "@/app/data/db";
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM lacos');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar tecidos:', error);
    return NextResponse.json({ error: 'Erro ao buscar lacos' }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Dados do front-end
    const { nome, modelo, cor, quantidade, preco_unitario } = body;

    const [result] = await pool.query(
      'INSERT INTO lacos ( nome, modelo, cor, preco_unitario) VALUES (?, ?, ?, ?)',
      [nome, modelo, cor, quantidade,preco_unitario]
    );

    return NextResponse.json({
      message: 'Laço cadastrado com sucesso!',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao cadastrar Laço:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar Laço' }, { status: 500 });
  }
}