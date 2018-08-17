<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/user")
 */
class UserController extends Controller
{
    /**
     * @Route("/", name="api_user_index", methods="GET")
     */
    public function index(UserRepository $userRepository): Response
    {
        $users = [];
        foreach ($userRepository->findAll() as $u) {
            $users[] = [
                'id' => $u->getId(),
                'name' => $u->getName(),
                'tel' => $u->getTel(),
                'address' => $u->getAddress()
            ];
        };
        return JsonResponse::create($users);
    }
}
