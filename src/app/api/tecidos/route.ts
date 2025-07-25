

import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/data/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM tecidos');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar tecidos:', error);
    return NextResponse.json({ error: 'Erro ao buscar tecidos' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Dados do front-end
    const { nome, tipo, cor, quantidade, preco_unitario } = body;

    const [result] = await pool.query(
      'INSERT INTO tecidos (nome, tipo, cor, quantidade, preco_unitario) VALUES (?, ?, ?, ?, ?)',
      [nome, tipo, cor, quantidade, preco_unitario]
    );

    return NextResponse.json({
      message: 'Tecido cadastrado com sucesso!',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao cadastrar tecido:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar tecido' }, { status: 500 });
  }
}