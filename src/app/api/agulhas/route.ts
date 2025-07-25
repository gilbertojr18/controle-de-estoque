

import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/data/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM agulhas');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar agulhas:', error);
    return NextResponse.json({ error: 'Erro ao buscar agulhas' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Dados do front-end
    const {  tipo, tamanho, quantidade, preco_unitario } = body;

    const [result] = await pool.query(
      'INSERT INTO agulhas ( tipo, tamanho, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
      [tipo,tamanho, quantidade, preco_unitario]
    );

    return NextResponse.json({
      message: 'agulha cadastrado com sucesso!',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao cadastrar agulha:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar agulha' }, { status: 500 });
  }
}